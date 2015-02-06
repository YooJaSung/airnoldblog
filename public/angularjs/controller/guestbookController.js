/**
 * Created by yjsjjh on 2014-12-03.
 */
angular.module('airnold.controller')
    .controller('guestbookController', ['$scope',
        function($scope){
            $scope.guestbook_title = " 임시 방명록 title";
            $scope.guestbook_content = "임시 방명록 contents";
        }]);