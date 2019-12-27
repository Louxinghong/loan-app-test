// 后端express路由配置
const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/getMobileList', (req, res, next) => {
  api.getMobileList(req, res, next)
})

module.exports = router
