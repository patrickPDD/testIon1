var app = angular.module('libraryApp', []);

app.controller('recentVersions', ['$scope', '$http', function ($scope, $http) {
    const apiKey = '41f16b15997ff6bf818778afd07017ad';
    //$scope.some_data = "";

    //var appData = $scope.appData;
    //$scope.lastFive = $scope.appData.versions.slice(-5,0);
    //console.log("appData: " + appData);

    $scope.bringBackAppHistory = function (choice) {
        console.log("this happened: " + choice);
        $scope.message = "";

            if (choice !== "") {
                $http({
                    method: 'GET',
                    url: 'https://libraries.io/api/npm/' + choice + '?api_key=' + apiKey,
                    headers: {
                        "X-Object-Header" : "123456789",
                        "Content-Type": "application/json"
                    },
                    data: { test: 'test' }

                })
                    .then(function successCallback(res) {
                        $scope.appData = res.data;
                        console.log("get happened");
                        $scope.message = "We found your app " + choice;

                    }), function errorCallback(res) {
                    console.log("error happened");
                    $scope.errorMessage = res.data;
                };
            //}
        } else {
            $scope.message = "We can't find the app " + choice;
        }

    }
}]);
