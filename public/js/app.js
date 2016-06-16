var app = angular.module('libraryApp', []);

app.controller('recentVersions', ['$scope', '$http', function ($scope, $http) {
    const apiKey = '41f16b15997ff6bf818778afd07017ad';
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

                    }).catch (function(res) {
                    console.log("error happened");
                    $scope.message = "We can't find the app " + choice;
                    //$scope.errorMessage = res.data;
                })
            };
}]);
