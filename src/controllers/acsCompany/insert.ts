import { ResponseBody } from '../response-body'
import { AcsCompany } from '../../service/models/AcsCompany';
import acsCompanyDao from '../../service/AcsCompanyDao';

const multer = require("multer");
const path = require('path');

class ResponseComp extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertAcsCompany(req, res, next) {
    let company: AcsCompany = req.body;
    acsCompanyDao.companyByNit(company.nitComp)
        .then(data => {
            if (!data) {
                acsCompanyDao.insert(company)
                    .then(insert => {
                        res.send(new ResponseComp(true, insert, null));
                    }, err => {
                        res.status(500).send(new ResponseComp(false, null, err));
                    })
            }
            else {
                res.send(new ResponseComp(false, null, "El nit ingresado ya existe"));
            }
        }, err => {
            res.status(500).send(new ResponseComp(false, null, err));
        });
}

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/uploads/logos/')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${req.params.nit}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, callBack) {
        checkFileType(file, callBack);
    }
}).single('file');

// Check File Type
function checkFileType(file, callBack) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return callBack(null, true);
    } else {
        callBack('Error: Solo se admiten imágenes');
    }
}

export function addLogoAcsCompany(req, res, next) {
    upload(req, res, (err) => {
        const file = req.file;
        // console.log(file.filename);
        if (!file) {
            const error = new Error('No File')
            return next(error)
        }
        res.send(file);
    });
}