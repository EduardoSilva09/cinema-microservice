const Joi = require('joi')

const scheema = Joi.object({
    titulo: Joi.string()
        .required()
        .min(2)
        .max(150),
    sinopse: Joi.string()
        .min(10)
        .max(500),
    duracao: Joi.number()
        .integer()
        .min(10),
    dataLancamento: Joi.date()
        .required(),
    imagem: Joi.string()
        .required()
        .pattern(/https?:\/\/.+\.(jpe?g|png|gif|svg)/gi),
    categorias: Joi.array()
        .items(Joi.string())
        .required()
})

module.exports = scheema