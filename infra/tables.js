class Tables {
  init(connection) {
    this.connection = connection
    this.createTables()
  }

  createTables() {
    const sql =
      'CREATE TABLE IF NOT EXISTS calls (id int NOT NULL AUTO_INCREMENT, customer varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, comments text, PRIMARY KEY (id))'
    this.connection.query(sql, (error) => {
      if (error) {
        console.error(error)
      } else {
        console.log('table calls create success')
      }
    })
  }
}

module.exports = new Tables()
