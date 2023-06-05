const express = require("express")
const router = express.Router()
const db = require("../config/config")

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("API READY TO GO!")
})

router.get("/employee", (req, res) => {
  const sql = `SELECT * FROM employee`

  db.query(sql, (err, data) => {
    if (err) {
      res.send({
        status: false,
        data: [],
      })
    } else {
      res.send({
        status: true,
        message: "GET success",
        data: data,
      })
    }
  })
})

router.get("/employee/:id", (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM employee WHERE id_employee = ${id}`

  db.query(sql, (err, data) => {
    if (err) {
      res.send({
        status: false,
        data: [],
      })
    } else {
      res.send({
        status: true,
        message: "GET success",
        data: data,
      })
    }
  })
})

// router.get("/employee/:id", async (req, res) => {
//   const id = req.params.id
//   const sql = `SELECT * FROM employee WHERE id_employee = ${id}`

//   const result = await new Promise((resolve, reject) => {
//     db.query(sql, (err, data) => {
//       if (err) {
//         resolve({
//           status: false,
//           error: err,
//           data: [],
//         })
//       } else {
//         resolve({
//           status: true,
//           data: data,
//         })
//       }
//     })
//   })

//   res.status(200)
//   res.send(result)
// })

router.post("/employee", (req, res) => {
  const { nama, job, salary } = req.body
  const sql = `INSERT INTO employee (nama, job, salary) VALUES ('${nama}', '${job}', ${salary})`

  db.query(sql, (err, data) => {
    if (err) {
      res.send({
        status: false,
        data: [],
      })
    } else {
      res.send({
        status: true,
        message: "Data Created",
        data: {
          id: data.insertId,
          fields: req.body,
        },
      })
    }
  })
})

router.put("/employee/:id", (req, res) => {
  const { nama, job, salary } = req.body
  const id = req.params.id
  const sql = `UPDATE employee SET nama = '${nama}', job = '${job}', salary = ${salary} WHERE id_employee = ${id}`

  db.query(sql, (err) => {
    if (err) {
      res.send({
        status: false,
        data: [],
      })
    } else {
      res.send({
        status: true,
        message: "Update Success",
        data: req.body,
      })
    }
  })
})

router.delete("/employee", (req, res) => {
  const { nama } = req.body
  const sql = `DELETE FROM employee WHERE nama = '${nama}'`

  db.query(sql, (err) => {
    if (err) {
      res.send({
        status: false,
        data: [],
      })
    } else {
      res.send({
        status: true,
        message: "Delete Success",
        data: req.body,
      })
    }
  })
})

module.exports = router
