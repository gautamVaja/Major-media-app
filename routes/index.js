var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Gautam Express" });
});

/* GET React App */
// router.get("/app", function (req, res, next) {
//   res.sendFile(
//     path.join(__dirname, "../express-react/react-spa/public", "app.html")
//   );
// });

/* GET settings page */
// router.get("/settings", function (req, res, next) {
//   res.render("settings");
// });

// C:\Users\admin\Desktop\Major media app\express-react\react-spa\public
// __dirname = C:\Users\admin\Desktop\Major-media-app\routes\

module.exports = router;
