(function(){

var app = angular.module("githubViewer");

var UserController = function($scope,github,$routeParams){

var onUserComplete = function(data){
	//console.log("in ooo "+JSON.stringify(data));
	$scope.user = data;
	github.getRepos($scope.user).then(onRepos, onError);
};

var onRepos = function(data){
	$scope.repos = data;
};

var onError = function(){
	$scope.error = "could not fetch the data";
};

$scope.pageSize = 10
$scope.username = $routeParams.username;
$scope.repoSortOrder = "-stargazers_count";
github.getUser($scope.username).then(onUserComplete,onError);
};

app.controller("UserController",UserController);

}());