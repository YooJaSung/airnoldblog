/**
 * Created by yoojasung on 2015-02-06.
 */

angular.module('airnold.controller')
    .controller('guestbookdetailController', ['$scope','$routeParams','develop_manipulate',
        function($scope, $routeParams, develop_manipulate){
            // get category and number
            // setting develop_manipulate.set_current_contentnum

            $scope.guestbooknum = $routeParams.guestbooknum;
            $scope.repltempcontent = "aaaaaaaaaaaaaaaaaaa";
        }]);