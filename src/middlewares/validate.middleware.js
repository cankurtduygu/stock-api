import CustomError from "../helpers/customError.js";

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map((d) => d.message).join(", ");
    throw new CustomError(messages, 400);
  }
  next();
};

export default validate;

/************************* *
Yukaridaki fn. asagidaki ile tamamen ayni yukaridaki sadece higher-order-func.(func. döndüren dunc yani.)
const validate = (schema) => {

    return (req, res, next) => {

    }

/*************************** */