import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)
            
            if (ext === ".pdf") {
                cb( null, path.join(__dirname, '..', '..', 'reportsFiles'))
                
            } else {
                cb( null, path.join(__dirname, '..', '..', 'reportsImages'))
                
            }
        },
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        },
    })
};