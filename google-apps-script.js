/**
 * Google Apps Script for saving enquiries directly to Google Sheets:
 * Target Sheet: https://docs.google.com/spreadsheets/d/17iPgR6D3UhzyJcQRsiS956JsFIel3FEQYPb1JtLQmoQ/edit?gid=0#gid=0
 *
 * HOW TO DEPLOY IN 1 MINUTE:
 * 1. Open your Google Sheet in your browser:
 *    https://docs.google.com/spreadsheets/d/17iPgR6D3UhzyJcQRsiS956JsFIel3FEQYPb1JtLQmoQ/edit?gid=0#gid=0
 * 2. In the top menu, click "Extensions" > "Apps Script".
 * 3. Delete any code currently in the editor and paste this entire file.
 * 4. Click the Save icon (Ctrl + S).
 * 5. In the top right, click "Deploy" > "New deployment".
 * 6. Click the gear icon next to "Select type" and choose "Web app".
 * 7. Set Description: "Portfolio Inquiries".
 * 8. Set "Execute as": "Me".
 * 9. Set "Who has access": "Anyone"  <-- (CRITICAL so the form can submit without login).
 * 10. Click "Deploy", review and approve Google permissions when prompted.
 * 11. Copy the generated "Web app URL" (format: https://script.google.com/macros/s/.../exec).
 * 12. Paste your Web app URL into `src/config/sheetConfig.js` in the GOOGLE_SHEET_SCRIPT_URL variable.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Auto-create header row if sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Business / Brand",
        "Website Type",
        "Project Details",
        "Status"
      ]);

      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#F4F1EA");
      headerRange.setFontColor("#141312");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Format timestamp in Indian Standard Time (IST)
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    var name = data.name || "";
    var email = data.email || "";
    var business = data.business || "";
    var websiteType = data.websiteType || "";
    var details = data.details || data.message || "";
    var status = "New Enquiry";

    // Append submission row to the Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      business,
      websiteType,
      details,
      status
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "active", 
      message: "Portfolio Google Sheets Web App is ready to receive submissions." 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
