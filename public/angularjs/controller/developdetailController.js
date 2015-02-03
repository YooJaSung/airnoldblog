/**
 * Created by yoojasung on 2015-02-02.
 */

angular.module('airnold.controller')
    .controller('developdetailController', ['$scope','$routeParams','develop_manipulate',
        function($scope, $routeParams, develop_manipulate){
            // get category and number
            // setting develop_manipulate.set_current_contentnum
            develop_manipulate.set_current_contentnum($routeParams.num);
            $scope.repltempcontent = "aaaaaaaaaaaaaaaaaaa";
        }]);