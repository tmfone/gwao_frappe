const userSettingsURLKey = 'userSettingsURLKey';

const scriptSettingsURLKey = 'scriptSettingsURLKey';
const scriptSettingsClientIDKey = 'scriptSettingsClientIDKey';
const scriptSettingsClientSecretKey = 'scriptSettingsClientSecretKey';


function allMandatorySettingsPresent(){
  try {
    // Get the value for the user property 'DISPLAY_UNITS'.
    const scriptProperties = getScriptProperties();
    if (scriptProperties[scriptSettingsURLKey]
      && scriptProperties[scriptSettingsClientIDKey]
      && scriptProperties[scriptSettingsClientSecretKey]){
      return true;
    }
  }
  catch (err) {
    // TODO (developer) - Handle exception
    debugInfo('Failed with error %s', err.message);
    return false;
  }
}

function getSettingsRequiredCard() {
  var textParagraph = CardService.newTextParagraph()
    .setText(trsl('tOpenSettingsText'));
  var openSettingsAction = CardService.newAction().setFunctionName('getSettingsCard');
  var openSettingsButton = CardService.newTextButton().setText(trsl('tOpenSettings')).setOnClickAction(openSettingsAction);

  var cardSection = CardService.newCardSection()
      .addWidget(textParagraph)
      .addWidget(openSettingsButton);

  var card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
    .setTitle(trsl('tSetupRequired')))
    .addSection(cardSection)
    .build();
  return [card];
}

function getSettingsCard() {
  var scriptSettingsURLValue = getScriptProperty(scriptSettingsURLKey);
  if(!scriptSettingsURLValue){
    scriptSettingsURLValue = "";
  }

  var scriptSettingsClientIDValue = getScriptProperty(scriptSettingsClientIDKey);
  if(!scriptSettingsClientIDValue){
    scriptSettingsClientIDValue = "";
  }
  var scriptSettingsClientSecretValue = getScriptProperty(scriptSettingsClientSecretKey);
  if(!scriptSettingsClientSecretValue){
    scriptSettingsClientSecretValue = "";
  }
  
  let settingsCardURLInput = CardService.newTextInput()
      .setFieldName(scriptSettingsURLKey)
      .setTitle('URL')
      .setHint('https://*.frappecloud.com')
      .setMultiline(false)
      .setValue(scriptSettingsURLValue)
      .setOnChangeAction(CardService.newAction()
        .setFunctionName("scriptSettingsURLKeyChange"));
  let settingsCardClientIDInput = CardService.newTextInput()
      .setFieldName(scriptSettingsClientIDKey)
      .setTitle('Client ID')
      .setMultiline(false)
      .setValue(scriptSettingsClientIDValue)
      .setOnChangeAction(CardService.newAction()
        .setFunctionName("scriptSettingsClientIDKeyChange"));
  
  let settingsCardClientSecretInput = CardService.newTextInput()
      .setFieldName(scriptSettingsClientSecretKey)
      .setTitle('Client Secret')
      .setMultiline(false)
      .setValue(scriptSettingsClientSecretValue)
      .setOnChangeAction(CardService.newAction()
        .setFunctionName("scriptSettingsClientSecretKeyChange"));

  var settingsCardReturnToRootAction = CardService.newAction().setFunctionName('gotoPreviousCard');
  var settingsCardReturnToRootButton = CardService.newTextButton().setText(trsl('tBack')).setOnClickAction(settingsCardReturnToRootAction);

  let settingsCardSection1 = CardService.newCardSection()
      .addWidget(settingsCardURLInput)
      .addWidget(settingsCardClientIDInput)
      .addWidget(settingsCardClientSecretInput)
      .addWidget(settingsCardReturnToRootButton);

  let card = CardService.newCardBuilder()
      .addSection(settingsCardSection1)
      .build();
  return card;
}

function scriptSettingsURLKeyChange(e){
  setScriptProperty(scriptSettingsURLKey, e.formInput[scriptSettingsURLKey]);
}
function scriptSettingsClientIDKeyChange(e){
  setScriptProperty(scriptSettingsClientIDKey, e.formInput[scriptSettingsClientIDKey]);
}

function scriptSettingsClientSecretKeyChange(e){
  setScriptProperty(scriptSettingsClientSecretKey, e.formInput[scriptSettingsClientSecretKey]);
}


function gotoPreviousCard() {
  var nav = CardService.newNavigation().popCard();
  return CardService.newActionResponseBuilder()
      .setNavigation(nav)
      .build();
}
