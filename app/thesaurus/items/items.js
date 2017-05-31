app.controller("ItemsCtrl", function ($routeParams, $scope, $http) {
    $scope.loading = true;
    $http.get("http://zone47.com/tda/api/?"+$routeParams.category+"="+$routeParams.value+"&type="+$routeParams.typeCategory).then(function (response) {
        console.log(response.data);
        console.log($routeParams.category);
        console.log($routeParams.value);
        console.log($routeParams.typeCategory);
        $scope.items = response.data;
        $scope.value = $routeParams.value;
        $scope.typeCategory = $routeParams.typeCategory;

        strictQwd = $routeParams.value.replace('Q', '');
        $http.get("http://zone47.com/tda/api/?label="+strictQwd).then(function (response) {
            $scope.valueLabel = response.data["entity"]["label"];
        });

        $scope.loading = false;
    });
});