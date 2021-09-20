/* API endpoint for candidates */
export const CANDIDATES_URL = "/api/candidates";
export const REPORTS_URL = "/api/reports";
export const COMPANIES_URL = "/api/companies";
export const LOGIN_URL = "/login";
export const BASE_URL = "http://localhost:3333";

/* select options for create report -phase, status */
export const OPTIONS_PHASE = ["cv", "hr", "tech", "final"];
export const OPTIONS_STATUS = ["passed", "declined"];

/* sidebar list in create report */
export const CREATE_REPORT_SIDE_BAR = [
  "Select Candidate",
  "Select Company",
  "Fill Report Details",
];
