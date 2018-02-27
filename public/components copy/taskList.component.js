(function(){
console.log("list connect");

  var taskList = {
    bindings:{
      todoList:"<"
    },
    templateUrl:"partials/taskList.html",
    controller: function(TaskService) {
      var $ctrl = this;
      $ctrl.remove = function(index) {
        $ctrl.todoList.splice(index, 1);
      }
    }

  };

  angular.module("App")
  .component("taskList", taskList);
})();
