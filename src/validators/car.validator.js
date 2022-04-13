import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().min(2).max(20).required().messages({
        'string.empty':'model не може бути пустим',
        'string.min':'model має мати мінімум літер',
        'string.max': 'model має більше дозволеного максимума',

    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.empty':'price has empty number',
        'number.min':"number less then min"
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'year.empty':'year field is empty',
        'year.min':'year value less then min'
    })


})

export {
    carValidator
}