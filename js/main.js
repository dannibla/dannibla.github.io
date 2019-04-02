(function () {
    window.onload = function () {
        document.getElementById('gallery').className = 'gallery loaded';
    };

    var app = angular.module("MyApp", []);

    app.config(['$compileProvider', function ($compileProvider) { 
        $compileProvider.commentDirectivesEnabled(false);
    }]);

    app.filter('offset', function () {
        return function (input, start) {
            start = parseInt(start, 10);
            return input.slice(start);
        };
    });

    app.controller("gallery", function ($scope) {

        $scope.itemsPerPage = 8;
        $scope.currentPage = 0;
        $scope.items = [];

        for (var i = 0; i < 50; i++) {
            $scope.items.push({ id: i + 1, title: "name " + i, description: "description " + i, image: "https://via.placeholder.com/350", link: "link" });
        }

        $scope.range = function () {
            var rangeSize = 4;
            var ret = [];
            var start;

            start = $scope.currentPage;
            if (start > $scope.pageCount() - rangeSize) {
                start = $scope.pageCount() - rangeSize + 1;
            }

            for (var i = start; i < start + rangeSize; i++) {
                ret.push(i);
            }
            return ret;
        };
        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.prevPageDisabled = function () {
            return $scope.currentPage === 0 ? "disabled" : "";
        };
        $scope.pageCount = function () {
            return Math.ceil($scope.items.length / $scope.itemsPerPage) - 1;
        };
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };
        $scope.nextPageDisabled = function () {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };
        $scope.setPage = function (n) {
            $scope.currentPage = n;
        };
    });

})();