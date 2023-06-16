import Pembayaran from "../models/PembayaranModel.js";

export const getPembayaran = async(req, res) => {
    try {
        const response = await Pembayaran.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPembayaranById = async(req, res) => {
    try {
        const response = await Pembayaran.findOne( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPembayaran = async(req, res) => {
    try {
        await Pembayaran.create(req.body);
            
        res.status(201).json({msg: "Pembayaran berhasil"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePembayaran = async(req, res) => {
    try {
        await Pembayaran.update(req.body, {
            where:{
                id: req.params.id
            }
        });
            
        res.status(200).json({msg: "Pembayaran updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePembayaran = async(req, res) => {
    try {
        await Pembayaran.destroy({
            where:{
                id: req.params.id
            }
        });
            
        res.status(200).json({msg: "Pembayaran deleted"});
    } catch (error) {
        console.log(error.message);
    }
}