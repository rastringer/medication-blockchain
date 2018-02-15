// SPDX-License-Identifier: Apache-2.0

'use strict';

var app = angular.module('application', []);

// Angular Controller
app.controller('appController', function($scope, appFactory){

	$("#success_holder").hide();
	$("#success_create").hide();
	$("#error_holder").hide();
	$("#error_query").hide();

	$scope.queryAllDrug = function(){

		appFactory.queryAllDrug(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_drug = array;
		});
	}

	$scope.queryDrug = function(){

		var id = $scope.drug_id;

		appFactory.queryDrug(id, function(data){
			$scope.query_drug = data;

			if ($scope.query_drug == "Could not locate drug"){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}

	$scope.recordDrug = function(){

		appFactory.recordDrug($scope.drug, function(data){
			$scope.create_drug = data;
			$("#success_create").show();
		});
	}

	$scope.changeHolder = function(){

		appFactory.changeHolder($scope.holder, function(data){
			$scope.change_holder = data;
			if ($scope.change_holder == "Error: no drug found"){
				$("#error_holder").show();
				$("#success_holder").hide();
			} else{
				$("#success_holder").show();
				$("#error_holder").hide();
			}
		});
	}

});

// Angular Factory
app.factory('appFactory', function($http){

	var factory = {};

    factory.queryAllDrug = function(callback){

    	$http.get('/get_all_drug/').success(function(output){
			callback(output)
		});
	}

	factory.queryDrug = function(id, callback){
    	$http.get('/get_drug/'+id).success(function(output){
			callback(output)
		});
	}

	factory.recordDrug = function(data, callback){

		data.location = data.longitude + ", "+ data.latitude;

		var drug = data.id + "-" + data.location + "-" + data.timestamp + "-" + data.holder + "-" + data.manufacturer;

    	$http.get('/add_drug/'+drug).success(function(output){
			callback(output)
		});
	}

	factory.changeHolder = function(data, callback){

		var holder = data.id + "-" + data.name;

    	$http.get('/change_holder/'+holder).success(function(output){
			callback(output)
		});
	}

	return factory;
});
