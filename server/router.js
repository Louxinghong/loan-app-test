// 后端express路由配置
const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/getLogin', (req, res, next) => {
  api.getLogin(req, res, next)
})

router.post('/getRegister', (req, res, next) => {
  api.getRegister(req, res, next)
})

router.get('/getInsuranceType', (req, res, next) => {
  api.getInsuranceType(req, res, next)
})

module.exports = router
