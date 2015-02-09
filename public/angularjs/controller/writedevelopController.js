/**
 * Created by airnold on 14. 12. 9..
 */

angular.module('airnold.controller')
    .controller('writedevelopController', ['$scope','$routeParams','$insert_develop','tag_remove',
        function($scope, $routeParams, $insert_develop){
        $scope.categories = [
            'javascript',
            'nodejs',
            'angularjs'
        ];


        $scope.write_email = undefined;
        $scope.selectedcategory = $scope.categories[0];
        $scope.title = undefined;
        $scope.content_html = undefined;

        // 1. get all data  for insert develop content

        $scope.writebtn = function(){
            var sending_data = {};
            sending_data.email = $scope.write_email;
            sending_data.category = $scope.selectedcategory;
            sending_data.title = $scope.title;
            sending_data.contents = $scope.content_html;
            $insert_develop.insert_develop_content(sending_data);
        };
        $scope.cancelbtn = function(){

        };

        // 3. send to server insert data

        // 4. show toast for success or error

        // 5. redirect to previous path
    }]);