(function(){
  function TaskService(){
    var list = [];
    return{
      getData : getData,
      setData : setData
    };

    function getData(){
      return list;
    }

    function setData(list){
      savedList = list;
      console.log(savedList);
    }

  };


  angular
    .module("App")
    .factory("TaskService",TaskService)
})();
