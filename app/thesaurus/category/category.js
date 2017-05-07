app.controller("CategoryCtrl", function ($routeParams, $scope, $http) {
    $scope.loading = true;
    $http.get("http://zone47.com/tda/api/cat.php?cat="+$routeParams.label).then(function (response) {
        console.log(response.data);
        $scope.items = response.data;
        $scope.category = $routeParams.label;
        $scope.typeCategory = $routeParams.typeCategory;
        $scope.loading = false;

        switch($routeParams.label) {
            case "genre_book":
                $scope.categoryLabel = "Genre";
                break;
            case "author":
                $scope.categoryLabel = "Auteur";
                break;
            case "genre_movie":
                $scope.categoryLabel = "Genre";
                break;
            case "director":
                $scope.categoryLabel = "Réalisateur";
                break;
            case "starring":
                $scope.categoryLabel = "Acteur";
                break;
            case "language":
                $scope.categoryLabel = "Langue";
                break;
            case "country":
                $scope.categoryLabel = "Pays";
                break;
        }
    });
});