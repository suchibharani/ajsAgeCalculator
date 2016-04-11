//app.js

var myApp = angular.module('ajsAgeCalculator', []);

myApp.controller('ajsacController', ['$scope','milestones', function($scope, milestones){
	
		$scope.uname = "suchitra";
		//$scope.dob= new Date(1992,1,1);
		$scope.dob= "04/03/1992";
		$scope.calculateAge = function calculateAge(dob){
			var birthdate = new Date(dob);
			var ageDif = Date.now() - birthdate.getTime();
			 var ageDate = new Date(ageDif); // miliseconds from epoch
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		};
		
		
		milestones.success(function(data){
			$scope.milestones = data;
			
		})
}]);