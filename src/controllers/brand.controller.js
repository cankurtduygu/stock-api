"use strict"

import Brand from "../models/brands.js"
import CustomError from "../helpers/customError.js";

const brandController = {
    list: async (req, res) => {

        const data = await res.getModelList(Brand)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Brand),
            data
        })
    },
    create: async (req, res) => {

        const data = await Brand.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req, res) => {


        const data = await Brand.findById(req.params.id)

        if (!data) throw new CustomError('Data not found.', 404);

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {

        const data = await Brand.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError('Update failed, something went wrong', 404)

        res.status(200).send({
            error: false,
            data
        })
    },
    deletee: async (req, res) => {

        const { deletedCount } = await Brand.deleteOne({ _id: req.params.id })

        res.status(deletedCount ? 204 : 404).send({
            error: true,
            message: 'Data is not found or already deleted.'
        });
    },
};

export default brandController;