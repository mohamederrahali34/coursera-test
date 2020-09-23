(function {
	'use strict';
	angular.module("LunchCheck",[])
			  .controller("LunchCheckController",function($scope){
			    $scope.name="ERRAHALI";
				var Name=document.getElementById("message");
				Name.innerHTML="My name is Mohamed "+$scope.name;
			  });
	
});
()