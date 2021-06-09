const moment = require('moment')
const connection = require('../infra/database')

class Calls {
  create(call,res) {
    const createdAt = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(call.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

    const dataIsValid = moment(data).isSameOrAfter(createdAt)
    const customerIsValid = call.customer.length >= 5

    const validations = [
        {
            name:'data',
            valid:dataIsValid,
            errorMessage:'Data maior ou igual a data atual'
        },
        {
            name:'customer',
            valid:customerIsValid,
            errorMessage:'O nome do cliente deve ter pelo menos 5 caracteres'
        },
    ]

    const errors = validations.filter(field => !field.valid)
    const extistsErrors = errors.length

    if(extistsErrors) {
        res.status(400).json(errors)
    }

    const sql = 'INSERT INTO Calls SET ?'

    const _call = {...call, createdAt, data}

    connection.query(sql, _call, (error, result) => {
      if (error) {
        res.status(400).json(error)
      } else {
        res.status(201).json(result)
      }
    })
  }
}

module.exports = new Calls()
