
var serverModule = require('./server_setting/module_use');

var app = serverModule.express();

var middleWare = require('./server_setting/middleware_use');

var routing = require('./server_setting/route_use');

var errorHandling = require('./server_setting/errorhandling_use');

var serverSetting = require('./server_setting/server_use');

/**
 * middleware setting
 */

middleWare.middlewareSetting(app, serverModule);

/**
 * routes setting
 */

routing.routeSetting(app);

/**
 * errorhandling setting
 */

errorHandling.errorSetting(app);

/**
 * server Start
 */

serverSetting.serverStart(app);





/**
 * compression , domain, mongoose(mongodb), errorhandling, restful api architecture, restful url design
 * make directory - routes/*.js, telegram, email, image send(response)
 */



module.exports = app;
