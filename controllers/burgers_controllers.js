var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
router.put("/test", function(req,res){
  console.log("hit");
  res.end();
})
router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var flagStatus;
  //console.log("condition", condition);
  console.log(" Devoured status: " + !req.body.devour);
  if(req.body.devour){
    flagStatus = 1;
  }else{
    flagStatus = 0;
  }

  
  burger.update({
    devoured: flagStatus
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(200).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
