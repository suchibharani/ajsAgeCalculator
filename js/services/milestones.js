//factory

myApp.factory('milestones', ['$http',function($http){
  return $http.post('js/services/milestones.json')
	.success(function(data){
		console.log(data);
		return data;
	})
	.error(function(err){
		return err;
	})
}]);