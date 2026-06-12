"use strict"

import Frim from "../models/Firms.js"
import CustomError from "../helpers/customError.js";

const firmController = {
    list: async (req, res) => {

        const data = await res.getModelList(Firm)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Firm),
            data
        })
    },
    create: async (req, res) => {

        const data = await Firm.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req, res) => {


        const data = await Firm.findById(req.params.id)

        if (!data) throw new CustomError('Data not found.', 404);

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {

        const data = await Firm.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError('Update failed, something went wrong', 404)

        res.status(200).send({
            error: false,
            data
        })
    },
    deletee: async (req, res) => {

        const { deletedCount } = await Firm.deleteOne({ _id: req.params.id })

        res.status(deletedCount ? 204 : 404).send({
            error: true,
            message: 'Data is not found or already deleted.'
        });
    },
};

export default firmController;