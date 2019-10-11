const professoras = require('../model/professoras.json')

exports.get = (require, res) => {
    console.log(req.url)
    response.status(200).send(professoras)

}


