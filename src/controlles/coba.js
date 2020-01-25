const model = require('../models/admin')
module.exports = {
    first: (req, res) => {
        res.status(200).json('berhasil')
        res.end()
    },
    showadmin: (req, res) => {
        model.getUser()
      .then(result => {
        res.status(200).json(result)
        res.end()
    })
    .catch(err => {
        res.status(200).json('eror..!', err)
        res.end()
    })
    },
    showAdminById: (req, res) => {
        const id = req.params.id
        model.getUser2(id)
      .then(result => {
        res.status(200).json(result)
        res.end()
    })
    .catch(err => {
        res.status(200).json('eror..!', err)
        res.end()
    })
    },
    create: (req, res) => {
        const {
            createUsername,
            createPassword,
            createEmail,
            createLevelId
        } = req.body

        const data = {
            username: createUsername,
            password: createPassword,
            email: createEmail,
            levelid: createLevelId
        }  
        model.storeAdmin(data)
        .then(result => {
            res.status(200).json(result)
            res.end()
        })
        .catch(err => {
            res.status(400).json(err)
            res.end()
        })
    },  
    put: (req, res) => {
        const {
            createUsername,
            createPassword,
            createEmail,
            createLevelId,
            createId
        } = req.body

        const data = [
            createUsername,
            createPassword,
            createEmail,
            createLevelId,
            createId
        ]
        model.putAdmin(data)
        .then(result => {
            res.status(200).json(result)
            res.end()
        })
        .catch(err => {
            res.status(400).json(err)
            res.end()
        })
    },   
    delAdminById: (req, res) => {
        const id = req.params.id
        model.getDel(id)
      .then(result => {
        res.status(200).json(result)
        res.end()
    })
    .catch(err => {
        res.status(200).json('eror..!', err)
        res.end()
    })
    },                
}