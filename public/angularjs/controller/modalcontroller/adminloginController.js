/**
 * Created by yjsjjh on 2014-12-05.
 */

angular.module('airnold.controller')
    .controller('adminloginController',['$scope','$modalInstance','admin_login',
        function($scope, $modalInstance, admin_login){
            $scope.id = undefined;
            $scope.passwd = undefined;


            $scope.login = function () {
                var logindata = {};
                logindata.id = $scope.id;
                logindata.password = $scope.passwd;
                $modalInstance.close(logindata);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
