var request = require('request');

module.exports = {
  config: {
    'exotel_sid'    : "YOUR-API-KEY",
    'exotel_token'  : "YOUR-AUTH-TOKEN",
    'exophone'      : "YOUR-EXOPHONE-NUMBER",
  },

  init : function (S_ID, TOKEN, EXOPHONE) {
    this.exotel_sid   = S_ID;
    this.exotel_token = TOKEN;
    this.exophone     = EXOPHONE;
  },

  sendSMS : function(toNumber, message, callback) {
    var url = 'https://' + this.exotel_sid + ':' + this.exotel_token + '@twilix.exotel.in/v1/Accounts/' + this.exotel_sid +'/Sms/send';

    var params = {
      From  : this.exophone,
      To    : toNumber,
      Body  : message,
    }

    makeRequest(url, params, callback);
  },

  connectCall : function(firstNumber, secondNumber, callback) {
    var url = 'https://' + this.exotel_sid + ':' + this.exotel_token + '@twilix.exotel.in/v1/Accounts/' + this.exotel_sid +'/Calls/connect';

    var params = {
      From     : firstNumber,
      To       : secondNumber,
      CallerId : this.exophone,
      CallType : 'trans',
    }

    makeRequest(url, params, callback);
  },
}

function makeRequest(url, params, callback) {
  request.post(url, {form: params}, function (error, response, body) {
    if (error) {
      callback(error, response);
    } else {
      callback(null, body);
    }
  });
}