/**
 * Created by yoojasung on 2015-01-30.
 */

angular.module('airnold.service')
    .factory('$insert_develop',['$http','$window',function($http, $window){
        return{
            insert_develop_content : function(data){
                /*$http({
                 url: 'http://121.184.187.5:3000/place_search',
                 method: 'POST',
                 data: { 'data': data }
                 }).success(function (data, status, headers, config) {
                 $window.alert(data);
                 }).error(function (err, status, headers, config) {
                 $window.alert(err);
                 });*/
                console.log(data);
            }
        };
    }]);