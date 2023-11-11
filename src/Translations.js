function trsl(key,formatting) {
  var retValue = "";
  languageMap = loadLanguageMap();
  locale = Session.getActiveUserLocale();
  if (!languageMap[key]){
    retValue = key;
  }
  else if (languageMap[key][locale]){
    retValue = languageMap[key][locale];
  }
  else if (languageMap[key]['en']){
    retValue = languageMap[key]['en'];
  }
  else{
    retValue = key+'_en';
  }
  if (formatting){
    retValue = formatting + retValue + formatting.replace("<","</");
  }
  return retValue;
}

function loadLanguageMap() {
  return {
  "tId": {
    "en": "ID",
    "de": "ID"
  },
  "tName": {
    "en": "Name",
    "de": "Name"
  },
  "tArchivingBotTitle": {
    "en": "Archiving Bot (by tmf.one)",
    "de": "Archivierungs Bot (von tmf.one)"
  },
  "tBotLabel": {
    "en": "Bot Label (Gmail)",
    "de": "Bot Label (Gmail)"
  },
  "tBotSettingsTitle": {
    "de": "Bot Einstellungen",
    "en": "Bot Settings"
  },
  "tBasicSettings": {
    "de": "Grundeinstellungen",
    "en": "Basic Settings"
  },
  "tOpenSettings": {
    "de": "Einstellungen anzeigen",
    "en": "Open Settings"
  },
  "tOpenSettingsText": {
    "de": "Bitte vervollständige zuerst die Einstellungen!",
    "en": "Please open the settings page first and complete the setup there before using this add on!"
  },
  "tBack": {
    "de": "Zurück",
    "en": "Back"
  },
  "tDelete": {
    "de": "Löschen",
    "en": "Delete"
  },
  "tSetupRequired": {
    "de": "Einstellungen fehlen",
    "en": "Settings missing"
  },
  "tFolderSettings": {
    "de": "Ordner",
    "en": "Folder"
  },
  "tInfoTitle": {
    "de": "Information zur Nutzung",
    "en": "Usage Information"
  },
  "tSelectFolder": {
    "de": "Bitte wähle einen Ordner aus!",
    "en": "Please select a folder!"
  },
  "tFolderActionsUnsupported": {
    "de": "Ordner Aktionen werden leider noch nicht unterstützt!",
    "en": "Folder Actions are not yet supported!"
  },
  "tSelectOnlyOne": {
    "de": "Bitte wähle nur einen Ordner aus!",
    "en": "Please select only one folder!"
  },
  "tSorry":{
    "de": "Sorry, computer says no!",
    "en": "Sorry, computer says no!"
  },
  "tTriggerFrequency":{
    "de": "Intervall (Stunden)",
    "en": "Intervall (hours)"
  },
  "tTriggerFrequencyHint":{
    "de": "z.B.: 1 - für jede Stunde",
    "en": "e.g.: 1 - for every hour!"
  },
  "tPickLabel":{
    "de": "Wähle ein Gmail Label aus:",
    "en": "Pick a Gmail Label:"
  },
  "tPickFolder":{
    "de": "Gib eine Google Drive Ordner ID ein:",
    "en": "Enter a Google Drive Folder ID:"
  },
  "tGmailLabel":{
    "de": "Gmail Label",
    "en": "Gmail Label"
  },
  "tAddAction":{
    "de": "Aktion Hinzufügen",
    "en": "Add Action"
  },
  "tConfiguredActions":{
    "de": "Labels mit Aktionen",
    "en": "Labels with Actions"
  },
  "tConfigureYourActions":{
    "de": "Neue Aktion",
    "en": "New Action"
  },
  "tFolderIdInput":{
    "de": "Google Drive Ordner ID",
    "en": "Google Drive Folder ID"
  },
  "tFolderDetails":{
    "de": "Google Drive Ordner Details",
    "en": "Google Drive Folder Details"
  },
  "tFolderIdInputHint":{
    "de": "Bsp.: 10balkKoSbIKFaEFqUcwv1aFzzzz",
    "en": "e.g.: 10balkKoSbIKFaEFqUcwv1aFzzzz"
  },
  "tActionDownloadAttachments":{
    "de": "Speichern von Anhängen",
    "en": "Save Attachments"
  },
  "tActionInput":{
    "de": "Wähle eine Aktion aus",
    "en": "Choose an action"
  },
  "tfileTypeInput":{
    "de": "Wähle die Datei Typen der Anhänge aus die auf Google Drive werden sollen",
    "en": "Choose the file types of attachments to store on Google Drive"
  },
  "tfileTypes":{
    "de": "Konfigurierte Dateitypen",
    "en": "Configured file types"
  },
  "tfileTypes":{
    "de": "Konfigurierte Dateitypen",
    "en": "Configured file types"
  },
  "tfileTypes":{
    "de": "Konfigurierte Dateitypen",
    "en": "Configured file types"
  }, 
  };
}
