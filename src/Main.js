const debugFlag = true;

const constMap = {
  gmail: "gmail",
  drive: "drive",
  selMessage: "MESSAGE",
  selFile: "FILE",
  selFolder: "FOLDER",
}

const defaultError = {
  errorText: trsl('tSorry')
}

let baseURL = "";
let clientID = "";
let clientSecret = "";

function getMain(e){
  if (!allMandatorySettingsPresent()){
    return getSettingsRequiredCard();
  }
  baseURL = getScriptProperty(scriptSettingsURLKey);
  clientID = getScriptProperty(scriptSettingsClientIDKey);
  clientSecret = getScriptProperty(scriptSettingsClientSecretKey);
  if (!isOauth2Authorized()){
    debugInfo("Not Authorized");
    return buildAuthorizationCard({
      url: getFrappeClient().getAuthorizationUrl(),
    });
  }
  var currentUser = getCurrentUser();
  debugInfo("Authorized as " + currentUser);
  return buildAuthorizedCard(currentUser);
  /*
  switch(e.hostApp) {
    case constMap.drive:
      return getDriveCard(e);
    case constMap.gmail:
      return getGmailCard(e);
    default:
      return buildErrorCard(defaultError);  
  }
  */
}

function debugInfo(debugMessage){
  if(!debugFlag){
    return;
  }
  if (typeof debugMessage === 'object'){
    debugMessage = JSON.stringify(debugMessage, 0, 2);
  }
  console.log(arguments.callee.caller.name + ": " + debugMessage)
}
