app.controller('MyCtrl', MyCtrl);

app.factory('Page', function($http) {
    var factory = {};
    var title = 'default';
    var index = 0;

    factory.setTitle = function(newTitle) {
        title = newTitle;
    };
    factory.setIndex = function(newIndex) {
        index = newIndex;
    };
    factory.getTitle = function() {
        return title;
    };
    factory.getIndex = function() {
        return index;
    };
    factory.postData = function(url, data, callback) {
        $http.post(url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(data) {
                return $.param(data);
            }
        }).success(function(data) {
            if (callback) {
                callback(data);
            }

        });
    };
    factory.getData = function(callback) {
        $http.get('./php/guidesList.php')
            .success(function(data) {
                callback(data)
            });
    };
    return factory;
});

function MyCtrl($scope, Page) {
    $scope.Page = Page;
}
