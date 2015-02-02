/**
 * Created by yoojasung on 2015-01-30.
 */
angular.module('airnold.directive')
    .directive('inputreplDirective',function() {
        return {
            restrict: 'EA',
            templateUrl : '/angularjs/views/directivetemplate/inputrepl.html',
            /*controller : 'inputreplController',*/
            controller : function($scope, $element,develop_manipulate){
                $scope.nickname = undefined;
                $scope.password = undefined;
                $scope.content = undefined;

                var temp = $element.find('.repl_input');
                temp.hide();

                $scope.toggle = function(){
                    var temp = $element.find('.repl_input');
                    temp.slideToggle();
                    $scope.nickname = "";
                    $scope.password = "";
                    $scope.content = "";
                };

                $scope.insertrepl = function(){
                    //make insert_repl service
                    // develop_manipulate.get_current_contentnum
                }
            },
            link: function (scope, element, attributes, controller) {}
        }
    })

    .directive('showreplDirective', function(){
        return{
            restrict : 'EA',
            templateUrl : '',
            controller : 'showreplController',
            scope : {
                content : '='
            },
            link : function(scope, element, attribute, controller){}
        }
    });
