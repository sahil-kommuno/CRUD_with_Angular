const expresss = require('express');
const searchFormData = require('../APIs/Search.formdata');
const searchrouter = expresss.Router();
import loggerDetail from '../Middleware/commonMiddleware/common.Middleware';

searchrouter.post(
  '/searchbyname',
  loggerDetail,
  searchFormData.searchbyname
);
// searchrouter.get(
//   '/searchbyemail/:search',
//   loggerDetail,
//   searchFormData.searchbyemail
// );
// searchrouter.get(
//   '/searchbypassword/:search',
//   loggerDetail,
//   searchFormData.searchbypassword
// );

module.exports = searchrouter;
