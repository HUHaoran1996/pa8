angular.module('starter.find', [])
.controller('findCtrl', ['$scope','$http',function($scope,$http) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.search = function() {
        $http.get('js/find/controllers/find.json').success(function(findData){
		console.log(findData);
		$scope.findData=findData.data;
	});
    };
    $scope.search();
}]);