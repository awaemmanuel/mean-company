/**
Wraps angular-socket-io bower component factory (apparently this is the only way to connect on multiple addresses..)
- https://github.com/btford/angular-socket-io

@class socket

@toc
*/

'use strict';

var CronJob = require('cron').CronJob;
var self;

/**
 @param {Object} opts
 */
function Cron(opts) {
	self = this;
}

Cron.prototype.testRun = function(params) {
    new CronJob('5 * * * * *', function(){
        //console.log('You will see this message every five second');
    }, null, true, "America/New_York");
};

module.exports = new Cron({});