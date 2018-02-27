var express = require("express");
var inMemoryDatabase =  require("./in-memory-database");
var router = express.Router();

// var task = [
//   {  task: "vacuum" },
//   {  task: "wash the dishes"  },
//   {  task: "take out the garbage"},
//   {  task: "laundry"},
//   {  task: "make the bed"}];
//
// var randomTask = task[Math.floor(Math.random()*task.length)];
var taskDb = inMemoryDatabase();
taskDb.init([]);

router.get("/tasks", function(req, res){
  res.send(taskDb.readAll());
});

router.post("/tasks", function(req, res){
  var task =  req.body;
  taskDb.create(task);
  res.status(201).send(task);
});

router.delete("/tasks/:id", function( req, res){
  var id = req.params.id;
  taskDb.delete(id);
  res.send("Deleted.");
});

// module.exports.randomTask = randomTask

// console.log(randomTask);


module.export = router;
