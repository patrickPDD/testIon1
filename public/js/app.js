var app = angular.module('libraryApp', []);

app.controller('recentVersions', ['$scope', '$http', function ($scope, $http) {
    const apiKey = '41f16b15997ff6bf818778afd07017ad';
    $scope.some_data = "gulp";

    //var appData = $scope.appData;
    //$scope.lastFive = $scope.appData.versions.slice(-5,0);
    //console.log("appData: " + appData);

    $scope.bringBackAppHistory = function (some_data) {
        console.log("this happened: " + some_data);
        $scope.message = "";
        if ($scope.some_data) {
            if ($scope.some_data !== "") {
                $http({
                    method: 'GET',
                    url: 'https://libraries.io/api/npm/' + $scope.some_data + '?api_key=' + apiKey
                })
                    .then(function successCallback(res) {
                        $scope.appData = res.data;
                        console.log("get happened");

                    }), function errorCallback(response) {
                    console.log("error happened");
                    $scope.errorMessage = res.data;
                };
            }
        } else {
            $scope.message = "We can't find the app " + some_data;
        }

    }
}]);
