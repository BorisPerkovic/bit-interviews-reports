/* API endpoint for candidates */
export const CANDIDATES_URL = "http://localhost:3333/api/candidates";
export const REPORTS_URL = "http://localhost:3333/api/reports";
export const COMPANIES_URL = "http://localhost:3333/api/companies";
export const LOGIN_URL = "http://localhost:3333/login";
export const BASE_URL = "http://localhost:3000/";

/* select options for create report -phase, status */
export const OPTIONS_PHASE = ['cv','hr','tech','final'];
export const OPTIONS_STATUS = ['passed','declined'];

/* sidebar list in create report */
export const CREATE_REPORT_SIDE_BAR = [
  "Select Candidate",
  "Select Company",
  "Fill Report Details",
];
// export const COMPANIES = Object.freeze({
//     GOOGLE: {
//         LABEL: 'Google',
//         ID: 'GO',
//         NAME: 'Google etch , at san Francisko'
//     },
//     FACEBOOK: {
//         LABEL: 'Google',
//         ID: 'GO',
//         NAME: 'Google etch , at san Francisko'
//     },
//     TWITTER: {}
// });

// export const getCompanyByLabel = (label) => Object.values(COMPANIES).find(comp => comp.LABEL === label);

// export const getCompanyById = (id) => Object.values(COMPANIES).find(comp => comp.ID === id);
