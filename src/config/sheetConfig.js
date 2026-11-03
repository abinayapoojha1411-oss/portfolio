// Google Sheets Integration Configuration
// Target Google Sheet: https://docs.google.com/spreadsheets/d/17iPgR6D3UhzyJcQRsiS956JsFIel3FEQYPb1JtLQmoQ/edit?gid=0#gid=0

export const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/17iPgR6D3UhzyJcQRsiS956JsFIel3FEQYPb1JtLQmoQ/edit?gid=0#gid=0";

// When you deploy your Google Apps Script Web App (from Extensions > Apps Script in your Google Sheet),
// paste the resulting Web App URL below or define VITE_GOOGLE_SHEET_SCRIPT_URL in your .env file:
export const GOOGLE_SHEET_SCRIPT_URL = 
  import.meta.env.VITE_GOOGLE_SHEET_SCRIPT_URL || 
  "";
