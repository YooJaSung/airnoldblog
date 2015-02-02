/**
 * Created by yjsjjh on 2014-12-03.
 */
angular.module('airnold.controller')
    .controller('mainController', ['$scope', function($scope){
        $scope.index = 0;

        $scope.images = [
            '/images/image1.jpeg',
            '/images/image2.jpeg',
            '/images/image3.png'
        ];
    }]);