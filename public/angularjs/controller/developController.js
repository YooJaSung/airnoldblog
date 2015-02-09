/**
 * Created by yjsjjh on 2014-12-03.
 */
angular.module('airnold.controller')
    .controller('developController', ['$scope','develop_manipulate','$window','$location','$routeParams','admin_login','tag_remove',
        function($scope, develop_manipulate, $window, $location,$routeParams,admin_login,tag_remove){
            $scope.previoustitle = undefined;
            $scope.login_status = admin_login.get_login_status();
            $scope.currenttitle = $routeParams.category;

            // 1. get resolve data
            // 2. matching to develop view

            ////// temp title & content
            var temptitle = "타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀";
            var tempcontent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
            $scope.title = develop_manipulate.check_title_length(temptitle);
            $scope.content = develop_manipulate.check_content_length(tag_remove.removeHtmlTag(tempcontent));
            /////

            develop_manipulate.set_current_category($routeParams.category);
            if($scope.previoustitle === undefined){
                angular.element('.'+$routeParams.category).addClass('active');
                $scope.previoustitle = $routeParams.category;
            }
            else{
                angular.element('.'+$scope.previoustitle).removeClass('active');
                angular.element('.'+$routeParams.category).removeClass('active');
                $scope.previoustitle = $routeParams.category;
            }

            $scope.$on('loginStatus', function(){
                $scope.login_status = admin_login.get_login_status();
            });

            $scope.writesomething = function(){
                $location.path('/write');
            };

           /* $scope.$on('$routeChangeSuccess', function(next, current){
                // get or post http request in this method
            });*/

    }]);