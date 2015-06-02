/**
 * Created by yoojasung on 2015-02-02.
 */
angular.module('airnold.service')
    .factory('admin_login',[function($timeout){
        var templogin_data = {
            id : 'airnold',
            password : '790102'
        };

        var login_status = false;
        var login_message = undefined;

        var admin_login = {};

        admin_login.compare_login = function(modal_data){
            var login_result = comparelogindata(modal_data, templogin_data);
            if(login_result === true){
                this.set_login_status(true);

            }else{
                this.set_login_status(false);
                this.set_login_message(login_result);
            }
        };

        admin_login.set_login_status = function(login_result) {
            login_status = login_result;
        };

        admin_login.get_login_status = function(){
            return login_status;
        };

        admin_login.set_login_message = function(message) {
            login_message = message;
        };

        admin_login.get_login_message = function(){
            return login_message;
        };

        return admin_login;
        
    }]);

function comparelogindata(modal_data , templogin_data){

    if(modal_data.id === templogin_data.id){
        if(modal_data.password === templogin_data.password){
            return true;
        }else{
            return  'Please Check your Password';
        }
    }else{
        return 'Please Check your ID';
    }
}