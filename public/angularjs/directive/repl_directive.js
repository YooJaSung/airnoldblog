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
            templateUrl : '/angularjs/views/directivetemplate/showrepl.html',

            scope : {
                content : '=replContent'
            },
            controller : function($scope, $element){
                $scope.repl_contents = $scope.content;
                $scope.status_flag = true;
                $scope.btn_status = '수정';

                var temp = $element.find('.edit_repl_input');
                temp.hide();

                $scope.toggle = function(flag){
                    if(flag === 'edit'){
                        // edit button
                        $scope.status_flag = true;
                        $scope.btn_status = '수정';
                    }else{
                        // delete button
                        $scope.status_flag = false;
                        $scope.btn_status = '삭제';
                    }
                    var temp = $element.find('.edit_repl_input');
                    temp.slideToggle();
                    $scope.nickname = "";
                    $scope.password = "";
                    $scope.content = "";
                };


                $scope.edit_repl = function(){

                    // 1. check nickname & password
                    // 2. nickname & password match
                    if($scope.status_flag === true) {
                        console.log('수정');
                        // get update data

                        // update http request

                    }else{
                        console.log('삭제');

                        // delete http request

                    }
                    // 2. nickname & password not match
                    // show some message and redirect previous page


                };



            },
            link : function(scope, element, attribute, controller){}
        }
    });
