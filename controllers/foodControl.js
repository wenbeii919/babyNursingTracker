const User = require('../models/User');
const FoodLog = require('../models/FoodLog');

let addFood = async (req, res) => {
    try {
        let newFood = new FoodLog(req.body);
        let user = await User.findById(req.auth.id);
        newFood._user = user;
    
        await newFood.save();
        return res.json(newFood);
      } catch (e) {
        console.log(e);
        return res.status(400).json({ error: e });
      }
}

let editFood = async (req, res) => {
    try {
      let food = await FoodLog.findById(
        req.params.foodId,
      ).populate("user", "id");

      if (!food) {
        return res.status(404).json({ error: "Log not found" });
      }

      let hasAuth = food._user.id == req.auth.id;
      if (!hasAuth) {
        return res.status(401).json({ error: "You don't have permission" });
      }

      food = await FoodLog.findByIdAndUpdate(
          req.params.foodId,
          { $set: req.body },
          { new: true }
      );

      return res.json(food);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
  };

  let deleteFood = async (req, res) => {
    try {
      let food = await FoodLog.findById(
        req.params.foodId,
      ).populate("user", "id");

      if (!food) {
        return res.status(404).json({ error: "Log not found" });
      }

      let hasAuth = food._user.id == req.auth.id;
      if (!hasAuth) {
        return res.status(401).json({ error: "You don't have permission" });
      }

      await food.remove(req.params.foodId);

      return res.json({ success: true });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
  };

  getFood = async (req, res) => {
    try {
      if (req.params.foodId) {
        let food = await FoodLog.findById(
          req.params.foodId
        ).populate("user", "id");
        let hasAuth = food && food._user.id == req.auth.id;
        if (!hasAuth) {
          return res.status(401).json({
            error:
              "Could not find the log or you don't have the permission"
          });
        } else {
          return res.json(food);
        }
      } else {
        let foods = await FoodLog.find({
          user: await User.findById(req.auth.id)
        });
  
        return res.json(foods);
      }
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  };

  module.exports = {
    addFood,
    editFood,
    deleteFood,
    getFood
};
