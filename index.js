const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// db connects
mongoose
    .connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log("Connected To MongoDB via Mongoose"))
    .catch(err => console.log(err));

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const sleepRoutes = require("./routes/sleepRoutes");
app.use("/api/sleep/", sleepRoutes);

const foodRoutes = require("./routes/foodRoutes");
app.use("/api/food/", foodRoutes);

const diaperRoutes = require("./routes/diaperRoutes");
app.use("/api/diaper/", diaperRoutes);

if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets, ex. main.js or main.css file
    app.use(express.static('client/build'));
    // express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
    if (err) throw err;
    console.log(`listening on ${PORT}`);
  });
