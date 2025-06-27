const expresss = require('express');
const userFormData = require('../APIs/User.formdata');
const router = expresss.Router();
import upload from '../Image.Upload/user.Upload.Image';
import loggerDetail from '../Middleware/commonMiddleware/common.Middleware';

router.post(
  '/postdata',
  upload.single('image'),
  loggerDetail,
  userFormData.postdata
);
router.get('/getdata', loggerDetail, userFormData.getdata);
router.delete('/deletedata/:id', loggerDetail, userFormData.deletedata);
router.put(
  '/updatedata/:id',
  upload.single('image'),
  loggerDetail,
  userFormData.updatedata
);

module.exports = router;
