import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$')
    )
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain uppercase, lowercase, number and special character.',
    }),
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  role: Joi.string().valid('admin', 'staff').default('staff'),
});

export default userSchema;
