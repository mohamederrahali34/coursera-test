(function {
	'use strict';
			
		angular.module('LunchCheck',[]).controller('LunchCheckController',function($scope){
				
			  $scope.count=function(){
			  $scope.message=function(){
			  if(countItems()==0) {
			  alert("Please enter data first");
			  return "";}
			  else if(countItems()<=3){
			  return "Enjoy!";
			  }
			  else return "Too much !!";
			  }
			  };
			  
			  
			  function isEmpty(array){
			  for(var i=0;i<array.length;i++){
				if(array[i]!="")  return false ;
			  }
			  return true;
			  }
			  function displayMessage(){
			  var messageOutput=document.getElementById("msg");
			  messageOutput.innerHTML(message);
			  }
			  function countItems(){
				 var inputItem=document.getElementById("lunch-menu");
		        var str=inputItem.value;
				var strItems=str.split(',');
				if(isEmpty(strItems)){
					
					return 0 ;
				}
				else {
				return strItems.length;}
			  }
	});
	
})()
