app.controller('AddController', AddController);



function AddController($scope, Page) {

    Page.setTitle('新增');
    Page.setIndex(2);

    $scope.add = function() {
        if (!$scope.newName || !$scope.newId || !$scope.newCardId || !$scope.newAge || !$scope.newSex ||
            !$scope.newWorkYears || !$scope.newSpecialty) {
            $('#myModal').modal('show');

        } else {
            Page.postData('./php/add.php', {
                name: $scope.newName,
                id: $scope.newId,
                cardId: $scope.newCardId,
                age: $scope.newAge,
                sex: $scope.newSex,
                workYears: $scope.newWorkYears,
                specialty: $scope.newSpecialty
            }, function() {
                // 跳转要在回调函数中跳转，因为添加信息是异步操作，否则跳转在数据被添进数据库前就进行了
                // 导致跳转回到主页时查询的信息不包括新增的数据
                window.location.href = '#/search';
            });

            $scope.newName = $scope.newId = $scope.newCardId = $scope.newAge =
                $scope.newSex = $scope.newWorkYears = $scope.newSpecialty = '';


        }


    };
}
