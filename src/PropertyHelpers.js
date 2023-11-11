
// User Properties
function getUserProperty(key){
  try {
    var value = PropertiesService.getUserProperties().getProperties()[key];
  } catch (err) {
    // TODO (developer) - Handle exception
    debugInfo(`Failed with error ${err.message}`);
  }
  return value;
}
function setUserProperty(key, value){
  try {
      // Set a property in each of the three property stores.
      const userProperties = PropertiesService.getUserProperties();
      userProperties.setProperty(key, value);
      debugInfo("User Property: " + key + " changed to " + value);
    } catch (err) {
      debugInfo(`Failed with error ${err.message}`);
    }
}
function deleteUserProperty(key){
  try {
      // Set a property in each of the three property stores.
      const userProperties = PropertiesService.getUserProperties();
      userProperties.deleteProperty(key);
    } catch (err) {
      debugInfo(`Failed with error ${err.message}`);
    }
}

/*FOR DEBUGGING*/
function getUserProperties(){
  try {
    var value = PropertiesService.getUserProperties().getProperties();
    debugInfo(value);
  } catch (err) {
    // TODO (developer) - Handle exception
    debugInfo(`Failed with error ${err.message}`);
  }
  return value;
}

// Script Properties
function getScriptProperty(key){
  try {
    var value = PropertiesService.getScriptProperties().getProperties()[key];
  } catch (err) {
    // TODO (developer) - Handle exception
    debugInfo(`Failed with error ${err.message}`);
  }
  return value;
}
function setScriptProperty(key, value){
  try {
      // Set a property in each of the three property stores.
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.setProperty(key, value);
      debugInfo("Script Property: " + key + " changed to " + value);
    } catch (err) {
      debugInfo(`Failed with error ${err.message}`);
    }
}
function deleteScriptProperty(key){
  try {
      // Set a property in each of the three property stores.
      const scriptProperties = PropertiesService.getScriptProperties();
      scriptProperties.deleteProperty(key);
    } catch (err) {
      debugInfo(`Failed with error ${err.message}`);
    }
}

/*FOR DEBUGGING*/
function getScriptProperties(){
  try {
    var value = PropertiesService.getScriptProperties().getProperties();
    debugInfo(value);
  } catch (err) {
    // TODO (developer) - Handle exception
    debugInfo(`Failed with error ${err.message}`);
  }
  return value;
}
