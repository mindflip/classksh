const adminModel = require('../model/admin.model');
const bcrypt = require('bcrypt');

exports.createAdmin = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 12);
        const admin = await adminModel.create(req.body);
        res.status(201).json(admin);
    } catch (err) {
        next(err);
    }
};

exports.getAdmins = async (req, res, next) => {
    try {
        const allAdmins = await adminModel.find({});
        res.status(200).json(allAdmins);
    } catch (err) {
        next(err);
    }
};

exports.getAdminById = async (req, res, next) => {
    try {
        const admin = await adminModel.findById(req.params.admin_id);
        if(admin) {
            res.status(200).json(admin);
        } else {
            res.status(404).send();
        }
    } catch (err) {
        next(err);
    }
};

exports.deleteAdmin = async (req, res, next) => {
    try {
        const admin = await adminModel.findByIdAndDelete(req.params.admin_id);
        if(admin) {
            res.status(200).json(admin);
        } else {
            res.status(404).send();
        }
    } catch(err) {
        next(err);
    }
};