import { Router } from 'express'
import multer from 'multer';

import reportsFilesConfig from './config/reportFilesUpload';

import ReportsController from './controllers/reportsController';

const routes = Router();
const uploadFilesReport = multer(reportsFilesConfig);

routes.post('/reports', uploadFilesReport.array('files'), ReportsController.create);
routes.get('/reports', ReportsController.index);

export default routes;