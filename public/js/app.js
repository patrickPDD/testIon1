var app = angular.module('libraryApp', []);

app.controller('recentVersions', ['$scope', '$http', function ($scope, $http) {
    const apiKey = '41f16b15997ff6bf818778afd07017ad';
    $scope.appStart = true;
    $scope.bringBackAppHistory = function (choice) {
        console.log("this happened: " + choice);
        $scope.message = "";
                $http({
                    method: 'GET',
                    dataType: 'jsonp',
                    url: 'https://libraries.io/api/npm/' + choice + '?api_key=' + apiKey,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(function(res) {
                        $scope.appData = res.data;
                        var appData = $scope.appData;
                        var versionsArray = appData.versions;
                        $scope.lastfiveversions = versionsArray.reverse().slice(0,5);
                        $scope.message = "We found your app " + choice;
                        $scope.appStart = false;

                    }).catch (function(res) {
                    $scope.lastfiveversions ="";
                    $scope.appData="";
                    //$scope.message = "We can't find the app " + choice;
                    $scope.appStart = false;
                    //$scope.errorMessage = res.data;
                })
            };
}]);
