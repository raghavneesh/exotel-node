# Exotel NodeJs Wrapper
A NodeJs wrapper for Exotel APIs

```npm install exotel-node```

### Include and initialize
```javascript
var Exotel = require('exotel-node');
Exotel.init(SID, TOKEN, EXOPHONE);
```

### APIs available
* [Send SMS](#send_sms)
* [Connect call](#connect_call)

### <a name="send_sms"></a>Send SMS
```javascript
Exotel.sendSMS(TO_NUMBER, MESSAGE, function(error, response) {
  console.log(response);
});
```

### <a name="connect_call"></a>Connect call (Connect agent to customer)
```javascript
Exotel.connectCall(AGENT_NUMBER, CUSTOMER_NUMBER, function(error, response) {
  console.log(response);
});
```
---
### Submit issues
You can raise an issue in this repo or mail me at sidhant@hashexclude.com
