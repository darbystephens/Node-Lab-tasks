(function(){
  var taskForm = {
    templateUrl:
      "partials/taskForm.html",
    controller: function (TaskService){
      var $ctrl = this;
      $ctrl.todoList = [];
      $ctrl.add = function(task){
        $ctrl.todoList.push({task});
      }
    }
  };

  angular.module("App")
  .component("taskForm", taskForm);
})();
