app.controller('EditController', EditController);
app.controller('EditList', EditList);

function EditController($scope, Page) {
    Page.setTitle('编辑');
    Page.setIndex(3);

    Page.getData(function(data) {
        $scope.guides = data;
    });
}



function EditList($scope, Page) {

    

    var backToSerch = function() {
        window.location.href = '#/search';
    };

    $scope.click = function() {
        $scope.edit = true;
    };
    $scope.save = function() {
        if (!$scope.guide.name || !$scope.guide.id || !$scope.guide.cardId || !$scope.guide.age || !$scope.guide.sex ||
            !$scope.guide.workYears || !$scope.guide.specialty) {
            $('#myModal').modal('show');

        } else {
            $scope.edit = false;
            Page.postData('./php/update.php', {
                name: $scope.guide.name,
                id: $scope.guide.id,
                cardId: $scope.guide.cardId,
                age: $scope.guide.age,
                sex: $scope.guide.sex,
                workYears: $scope.guide.workYears,
                specialty: $scope.guide.specialty,
                gindex: $scope.guide.gindex
            }, backToSerch); // 回调函数中才跳转,确保数据已添加进数据库后才跳转

        }
    };
    $scope.remove = function(index) {
        $scope.edit = false;
        Page.postData('./php/delete.php', { gindex: $scope.guide.gindex }, backToSerch);
        
    };
}
