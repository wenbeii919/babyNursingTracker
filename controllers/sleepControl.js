const User = require('../models/User');
const SleepLog = require('../models/SleepLog');

let addSleep = async (req, res) => {
    try {
        let newSleep = new SleepLog(req.body);
        let user = await User.findById(req.auth.id);
        newSleep._user = user;
    
        await newSleep.save();
        return res.json(newSleep);
      } catch (e) {
        console.log(e);
        return res.status(400).json({ error: e });
      }
}

let editSleep = async (req, res) => {
    try {
      let sleep = await SleepLog.findById(
        req.params.sleepId,
      ).populate("user", "id");

      if (!sleep) {
        return res.status(404).json({ error: "Log not found" });
      }

      let hasAuth = sleep._user.id == req.auth.id;
      if (!hasAuth) {
        return res.status(401).json({ error: "You don't have permission" });
      }

      sleep = await SleepLog.findByIdAndUpdate(
          req.params.sleepId,
          { $set: req.body },
          { new: true }
      );

      return res.json(sleep);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
  };

  let deleteSleep = async (req, res) => {
    try {
      let sleep = await SleepLog.findById(
        req.params.sleepId,
      ).populate("user", "id");

      if (!sleep) {
        return res.status(404).json({ error: "Log not found" });
      }

      let hasAuth = sleep._user.id == req.auth.id;
      if (!hasAuth) {
        return res.status(401).json({ error: "You don't have permission" });
      }

      await sleep.remove(req.params.sleepId);

      return res.json({ success: true });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
  };

  getSleep = async (req, res) => {
    try {
      if (req.params.sleepId) {
        let sleep = await SleepLog.findById(
          req.params.sleepId
        ).populate("user", "id");
        let hasAuth = sleep && sleep._user.id == req.auth.id;
        if (!hasAuth) {
          return res.status(401).json({
            error:
              "Could not find the log or you don't have the permission"
          });
        } else {
          return res.json(sleep);
        }
      } else {
        let sleeps = await SleepLog.find({
          user: await User.findById(req.auth.id)
        });
  
        return res.json(sleeps);
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };

  module.exports = {
    addSleep,
    editSleep,
    deleteSleep,
    getSleep
};
  