function getFrappeClient(){
  debugInfo("Start");
  return OAuth2.createService('Frappe Login')
          .setAuthorizationBaseUrl(baseURL + '/api/method/frappe.integrations.oauth2.authorize')
          .setTokenUrl(baseURL + '/api/method/frappe.integrations.oauth2.get_token')
          .setClientId(clientID)
          .setCallbackFunction('authCallback')
          .setClientSecret(clientSecret)
          .setGrantType('authorization_code')
          .setCache(CacheService.getUserCache())
          .setPropertyStore(PropertiesService.getUserProperties());
}

function authCallback(callbackRequest) {
  debugInfo("Start");
  const userProperties = PropertiesService.getUserProperties();
  debugInfo('Callback:'+ callbackRequest);
  var authorized = getFrappeClient().handleCallback(callbackRequest);
  if (authorized) {
    userProperties.setProperty('frappe_access_token',getFrappeClient().getAccessToken());
    return HtmlService.createHtmlOutput(
      'Success! You can close this page now! <script>setTimeout(function() { top.window.close() }, 1);</script>');
  } else {
    return HtmlService.createHtmlOutput('Access Denied!');
  }
}

function isOauth2Authorized(){
  debugInfo("Start");
  var retVal = getFrappeClient().hasAccess();
  debugInfo(retVal);
  return retVal;
}

function buildAuthorizationCard(opts) {
  debugInfo("Start");
  var header = CardService.newCardHeader().setTitle('Authorization required');
  var section = CardService.newCardSection()
      .addWidget(
          CardService.newTextParagraph().setText(
              'Please authorize access to your Frappe/ERPNext instance.'
          )
      )
      .addWidget(
          CardService.newButtonSet().addButton(
              CardService.newTextButton()
                  .setText('Authorize')
                  .setAuthorizationAction(
                      CardService.newAuthorizationAction()
                          .setAuthorizationUrl(opts.url)
                  )
          )
      );
  var card = CardService.newCardBuilder()
      .setHeader(header)
      .addSection(section);
  return card.build();
}

function buildAuthorizedCard(currentUser) {
    let cardSection1TextParagraph1 = CardService.newTextParagraph()
        .setText("Hello " + currentUser + "!");

    let cardSection1 = CardService.newCardSection()
        .addWidget(cardSection1TextParagraph1);

    let card = CardService.newCardBuilder()
        .addSection(cardSection1)
        .build();
    return card;
}

function getCurrentUser(){
  debugInfo("Start");
  var token = getFrappeClient().getAccessToken();
  debugInfo("Token = " + token);
  var headers = {'Authorization': 'Bearer '+ token}
    var options = {
    'headers': headers,
    'contentType': 'application/json',
    'muteHttpExceptions': true
  };
  var url = baseURL + "/api/method/frappe.auth.get_logged_user";
  var response = UrlFetchApp.fetch(encodeURI(url), options);
  var responseObj = JSON.parse(response.getContentText());
  debugInfo(response.getResponseCode());
  debugInfo(response.getContentText());
  if (response.getResponseCode() != 200){
    return "";
  }
  debugInfo(responseObj.message)
  return responseObj.message;
}



