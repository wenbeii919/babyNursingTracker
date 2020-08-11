const User = require('../models/User');
const DiaperLog = require('../models/DiaperLog');

let addDiaper = async (req, res) => {
    try {
        let newDiaper = new DiaperLog(req.body);
        let user = await User.findById(req.auth.id);
        newDiaper._user = user;
    
        await newDiaper.save();
        return res.json(newDiaper);
      } catch (e) {
        console.log(e);
        return res.status(400).json({ error: e });
      }
}

let editDiaper = async (req, res) => {
    try {
      let diaper = await DiaperLog.findById(
        req.params.diaperId,
      ).populate("user", "id");

      if (!diaper) {
        return res.status(404).json({ error: "Log not found" });
      }

      let hasAuth = diaper._user.id == req.auth.id;
      if (!hasAuth) {
        return res.status(401).json({ error: "You don't have permission" });
      }

      diaper = await DiaperLog.findByIdAndUpdate(
          req.params.diaperId,
          { $set: req.body },
          { new: true }
      );

      return res.json(diaper);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
  };

  let deleteDiaper = async (req, res) => {
    try {
      let diaper = await DiaperLog.findById(
        req.params.diaperId,
      ).populate("user", "id");

      if (!diaper) {
        return res.status(404).json({ error: "Log not found" });
      }

      let hasAuth = diaper._user.id == req.auth.id;
      if (!hasAuth) {
        return res.status(401).json({ error: "You don't have permission" });
      }

      await diaper.remove(req.params.diaperId);

      return res.json({ success: true });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
  };

  getDiaper = async (req, res) => {
    try {
      if (req.params.diaperId) {
        let diaper = await DiaperLog.findById(
          req.params.diaperId
        ).populate("user", "id");
        let hasAuth = diaper && diaper._user.id == req.auth.id;
        if (!hasAuth) {
          return res.status(401).json({
            error:
              "Could not find the log or you don't have the permission"
          });
        } else {
          return res.json(diaper);
        }
      } else {
        let diapers = await DiaperLog.find({
          user: await User.findById(req.auth.id)
        });
  
        return res.json(diapers);
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };

  module.exports = {
    addDiaper,
    editDiaper,
    deleteDiaper,
    getDiaper
};
