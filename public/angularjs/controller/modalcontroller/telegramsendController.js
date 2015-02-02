/**
 * Created by yjsjjh on 2014-12-05.
 */

angular.module('airnold.controller')
    .controller('telegramsendController',['$scope','$modalInstance',
        function($scope, $modalInstance){

            $scope.telegram_writer_name = "";

            $scope.send = function () {
                $modalInstance.close($scope.telegram_writer_name);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
