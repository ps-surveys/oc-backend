import { ResponseBody } from "../response-body";
import { Response } from "express";
import actDynamicFormDao from "../../service/DynamicFormDao";

const multer = require("multer");
const path = require('path');

export class ResponseDynamicForm extends ResponseBody {
    constructor(success: boolean, public data, err: string) {
        super(success, err);
    }
}

export function insertSectionTable(req, res: Response, next) {
    const data: any = req.body;
    //const idSec = req.params.idSec;
    actDynamicFormDao.insert(data)
        .then(data => res.send(new ResponseDynamicForm(true, data, null)), 
        err => res.status(500).send(new ResponseDynamicForm(false, null, err)));
}

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/uploads/files/')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${req.params.name}`)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 15000000 },
    fileFilter: function (req, file, callBack) {
        checkFileType(file, callBack);
    }
}).single('file');

// Check File Type
function checkFileType(file, callBack) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|pdf|xls|xlsx|csv|doc|docx|odt/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    // const mimetype = filetypes.test(file.mimetype);

    if (extname) {
        return callBack(null, true);
    } else {
        callBack('Error: Archivo no válido');
    }
}

export function addFileDynamicForm(req, res, next) {
    upload(req, res, (err) => {
        const file = req.file;
        // console.log("FN: ", file.filename);
        if (!file) {
            const error = new Error('No File')
            return next(error)
        }
        res.send(file);
    });
}
