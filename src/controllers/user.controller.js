"use strict"

import Users from '../models/user.js';
import CustomError from '../helpers/customError.js';
import userSchema from '../helpers/joiSchemas.js';

const userController = {
    list: async (req, res) => {

        const data = await res.getModelList(Users)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Users),
            data
        })
    },
    create: async (req, res) => {

        const data = await Users.create(req.body)

        res.status(201).send({
            error: false,
            data
        })
    },
    read: async (req, res) => {

        const data = await Users.findById(req.params.id)

        if (!data) throw new CustomError('Data not found.', 404);

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {


        const data = await Users.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError('Update failed, something went wrong', 404)

        res.status(200).send({
            error: false,
            data
        })
    },
    deletee: async (req, res) => {

        const { deletedCount } = await Users.deleteOne({ _id: req.params.id })

        res.status(deletedCount ? 204 : 404).send({
            error: true,
            message: 'Data is not found or already deleted.'
        });
    },
}

export default userController;