"use strict"

import Purchase from "../models/Purchases.js"
import CustomError from "../helpers/customError.js";
import queryHandler from "../middlewares/queryHandler.js";

const purchaseController = {
    list: async (req, res) => {

        const data = await res.getModelList(Purchase)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Purchase),
            data
        })
    },
    create: async (req, res) => {

        const data = await Purchase.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req, res) => {


        const data = await Purchase.findById(req.params.id)

        if (!data) throw new CustomError('Data not found.', 404);

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {

        const data = await Purchase.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError('Update failed, something went wrong', 404)

        res.status(200).send({
            error: false,
            data
        })
    },
    deletee: async (req, res) => {

        const { deletedCount } = await Purchase.deleteOne({ _id: req.params.id })

        res.status(deletedCount ? 204 : 404).send({
            error: true,
            message: 'Data is not found or already deleted.'
        });
    },
};

export default purchaseController;