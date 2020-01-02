// sql语句
const sqlMap = {
  getUsers: 'SELECT * FROM users WHERE mobile = ? AND password = ?',
  addUsers: 'INSERT INTO users(mobile, password, name) VALUES (?, ?, ?)'
}

module.exports = sqlMap
