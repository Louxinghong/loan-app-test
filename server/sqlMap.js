// sql语句
const sqlMap = {
  getUsers: 'SELECT * FROM users WHERE mobile = ? AND password = ?',
  addUsers: 'INSERT INTO users(mobile, password, name) VALUES (?, ?, ?)',
  getInsuranceType: 'SELECT * FROM insurance_type'
}

module.exports = sqlMap
