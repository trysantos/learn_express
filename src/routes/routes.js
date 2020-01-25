const express = require('express')
const router = express.Router()
const coba = require('../controlles/coba')

module.exports = router
router.route('/coba').get(coba.first)
router.route('/admin').get(coba.showadmin)
router.route('/admin/:id').get(coba.showAdminById)
router.route('/admin/postadmin').post(coba.create)
router.route('/admin/putadmin').put(coba.put)
router.route('/admin/deladmin/:id').delete(coba.delAdminById)

