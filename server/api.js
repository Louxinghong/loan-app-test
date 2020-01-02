// 连接数据库，各种方法实现
const mysql = require('mysql')
const dbConfig = require('./database')
const sqlMap = require('./sqlMap')

var pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  // 多语句查询
  multipleStatements: true
})

module.exports = {
  getLogin (req, res, next) {
    const mobile = req.query.mobile
    const password = req.query.password
    pool.getConnection((err, connection) => {
      if (err) {
        throw err
      }
      const sql = sqlMap.getUsers
      connection.query(sql, [mobile, password], (err, result) => {
        if (err) {
          throw err
        }
        res.json(result)
      })
      connection.release()
    })
  },
  getRegister (req, res, next) {
    const mobile = req.body.mobile
    const password = req.body.password
    const name = req.body.name
    pool.getConnection((err, connection) => {
      if (err) {
        throw err
      }
      const sql = sqlMap.addUsers
      connection.query(sql, [mobile, password, name], (err, result) => {
        if (err) {
          throw err
        }
        res.json(result)
      })
      connection.release()
    })
  }
}
