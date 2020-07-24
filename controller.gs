function doGet(e) {
  var action = e.parameter.action
  
  var members = [];
  if (action == "lunch" ) {
    var sheet = SpreadsheetApp.openById("1pa8pOP2DYbF2BxXeO9V3oceL1fXP3Yxp43cAUD_ZObE").getSheetByName("slack")
      , range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn())
      , data = range.getValues();
  } 
  data.forEach(function(row) {
    if (row[2] == 1) {
      members.push(row[0]);  
    }  
  });
  
  return ContentService.createTextOutput(JSON.stringify(members));     
}
