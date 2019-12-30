// sql语句
const sqlMap = {
  getMobile: 'SELECT * FROM mobile WHERE mobile = ?',
  getLoginMobile: 'SELECT * FROM mobile',
  getUsers: 'SELECT * FROM users WHERE mobile = ? AND password = ?'
}

module.exports = sqlMap
