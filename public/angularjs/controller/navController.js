/**
 * Created by yjsjjh on 2014-12-04.
 */

angular.module('airnold.controller')
    .controller('navController', ['$scope', '$window', '$modal', '$log', '$rootScope', 'admin_login',
        function ($scope, $window, $modal, $log, $rootScope, admin_login) {
            $scope.tooltip_setting = "bottom";
            $scope.tooltip_string = "admin login";
            $scope.login_status = false;

            $scope.sendtelegram = function () {

                var modaltelegram = $modal.open({
                    templateUrl: '/angularjs/views/modalviews/telegramform.html',
                    controller: 'telegramsendController',
                    size: 'lg'
                });

                modaltelegram.result.then(function (tempdata) {
                    console.log(tempdata);
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

            $scope.adminlogin = function () {

                if ($scope.login_status === true) {
                    $scope.login_status = false;
                    admin_login.set_login_status($scope.login_status);
                    $scope.tooltip_string = 'admin login';
                    $rootScope.$broadcast('loginStatus');

                } else {
                    var modaladminlogin = $modal.open({
                        templateUrl: '/angularjs/views/modalviews/adminloginform.html',
                        controller: 'adminloginController',
                        size: 'sm'
                    });

                    modaladminlogin.result.then(function (login_data) {
                        admin_login.compare_login(login_data);
                        $scope.login_status = admin_login.get_login_status();

                        if($scope.login_status !== true){
                            // 로그인이 안된 경우 message 받아와 alert 띄워주기
                            $window.alert(admin_login.get_login_message());
                            $scope.adminlogin();
                        }
                        else{
                            $scope.tooltip_string = 'logout';
                            $rootScope.$broadcast('loginStatus');
                        }
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                }
            };
        }]);
