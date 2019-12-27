const mysql = require('mysql')
// 连接数据库，各种方法实现
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
  getMobileList (req, res, next) {
    const mobile = req.query.mobile
    pool.getConnection((err, connection) => {
      if (err) {
        throw err
      }
      const sql = sqlMap.getMobile
      connection.query(sql, [mobile], (err, result) => {
        if (err) {
          throw err
        }
        res.json(result)
      })
      connection.release()
    })
  }
}