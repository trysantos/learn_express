const conn = require('../configs/conn')
module.exports = {
    getUser: () => {
        const query = `SELECT * FROM admins`
        return new Promise((resolve, reject) => {
          conn.query(query, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
      getUser2: (id) => {
        const query = `SELECT * FROM admins where idadmin='${id}'`
        return new Promise((resolve, reject) => {
          conn.query(query, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },
      storeAdmin: (data) => {
        const query = 'INSERT INTO admins SET ?'
        return new Promise((resolve, reject) => {
          conn.query(query, data, (err, result) => {
            if (!err) {
              console.log(111)
              resolve(result)
            } else {
              reject(new Error(query))
            }
          })
        })
      },  
      putAdmin: (data) => {
        const query = 'UPDATE admins SET username = ?, password = ?, email = ?, levelid = ? WHERE idadmin = ?'
        return new Promise((resolve, reject) => {
          conn.query(query, data, (err, result) => {
            if (!err) {
              console.log(111)
              resolve(result)
            } else {
              reject(new Error(query))
            }
          })
        })
      },     
      getDel: (id) => {
        const query = `DELETE FROM admins where idadmin='${id}'`
        return new Promise((resolve, reject) => {
          conn.query(query, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
      },         
}