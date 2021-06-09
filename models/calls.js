const connection = require('../infra/database')

class Calls {
  create(call) {
    const sql = 'INSERT INTO Calls SET ?'
    connection.query(sql, call, (error, result) => {
      if (error) {
        console.error(error)
      } else {
        console.log(result)
      }
    })
  }
}

module.exports = new Calls()
