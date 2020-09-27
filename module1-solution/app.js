(function () {
	'use strict';
			
		angular.module('LunchCheck',[])
		.controller('LunchCheckController',LunchCheckController );
		
		LunchCheckController.$inject=["$scope"];
		function LunchCheckController($scope){
				
			  function message(){
			  if(countItems()==0) {
			  alert("Please enter data first");
			  return "";}
			  else if(countItems()<=3){
			  return "Enjoy!";
			  }
			  else return "Too much !!";
			  };
			  function isEmpty(array){
			  for(var i=0;i<array.length;i++){
				if(array[i]!="")  return false ;
			  }
			  return true;
			  }
			  $scope.displayMessage=function(){
				  var msgOutput=document.getElementById("msg");
			       msgOutput.innerHTML=message();
			  };
			  function countItems(){
		        var str=$scope.items;
				var strItems=str.split(',');
				if(isEmpty(strItems)){
					return 0 ;
				}
				else {
				return strItems.length;}
			  }
	}
	
})()
