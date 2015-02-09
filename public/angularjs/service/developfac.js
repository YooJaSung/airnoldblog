/**
 * Created by yjsjjh on 2014-12-08.
 */

angular.module('airnold.service')
    .factory('develop_manipulate',[function(){
        var develop_obj = {};
        var current_category = undefined;
        var current_contentnum = undefined;

        develop_obj.check_title_length = function(str){
            var temp_title = '';
            if(str.length >= 14 ){
                temp_title = str.substring(0,14);
                temp_title += ' ... ';
                return temp_title;
            }else{
                temp_title = str;
                return temp_title;
            }
        };

        develop_obj.check_content_length = function(str){
            var temp_content = '';
            if(str.length >= 298 ){
                temp_content = str.substring(0,298);
                temp_content += ' ... ';
                return temp_content;
            }else{
                temp_content = str;
                return temp_content;
            }
        };

        develop_obj.set_current_category = function(current){
            current_category = current;
        };
        develop_obj.get_current_category = function(){
            return current_category;
        };
        develop_obj.set_current_contentnum = function(current){
            current_contentnum = current;
        };
        develop_obj.get_current_contentnum = function(){
            return current_contentnum;
        };

        return develop_obj;
    }])
    .factory('tag_remove', [function () {
        return {
            removeHtmlTag: function (html) {
                var pattern = /<[^>]+>/g;

                var tag_removed_text = html.replace(pattern, '');

                return tag_removed_text;
            }
        }
    }]);