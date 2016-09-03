app.controller('SearchController', SearchController);



function SearchController($scope, Page) {

    Page.setTitle('查询');
    Page.setIndex(1);

    Page.getData(function(data) {
        $scope.guides = data;
    });


    $scope.search = function() {
        $scope.keywords = $.trim($scope.keywords);
        if ($scope.keywords.length > 0) {
            Page.postData('./php/search.php', { keywords: $scope.keywords }, function(data) {
                $scope.guides = data;
            })
        } else {
            Page.getData(function(data) {
                $scope.guides = data;
            });
        }
    }
}
