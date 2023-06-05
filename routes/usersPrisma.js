const { PrismaClient } = require("@prisma/client")
const express = require("express")
const router = express.Router()

const prisma = new PrismaClient()

router.get("/", async (req, res) => {
  try {
    const employee = await prisma.employee.findMany()
    res.send(employee)
  } catch (err) {
    res.send("Gagal Mengambil Data Employee!")
  }
})

router.get("/employee/:id", async (req, res) => {
  const { id } = req.params

  try {
    const employee = await prisma.employee.findUnique({
      where: { id_employee: parseInt(id) },
    })

    if (employee) {
      res.json(employee)
    } else {
      res.status(404).json({ error: "Data Employee Tidak Ditemukan." })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Gagal Mengambil Data Employee!" })
  }
})

router.post("/employee", async (req, res) => {
  try {
    const { nama, job, salary } = req.body
    const employee = await prisma.employee.create({
      data: {
        nama,
        job,
        salary,
      },
    })

    res.send({
      status: true,
      message: "Data Created",
      data: employee,
    })
  } catch (err) {
    res.send({
      status: false,
      err: "Gagal Membuat Data Employee Baru!",
    })
  }
})

router.put("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { nama, job, salary } = req.body

    const updateEmployee = await prisma.employee.update({
      where: { id_employee: parseInt(id) },
      data: { nama, job, salary },
    })

    res.send({
      status: true,
      message: "Update Success",
      data: updateEmployee,
    })
  } catch (error) {
    res.send({
      status: false,
      error: "Gagal Memperbarui Data Employee!",
    })
  }
})

router.delete("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params

    const deletedEmployee = await prisma.employee.delete({
      where: { id_employee: parseInt(id) },
    })

    res.send({
      status: true,
      message: "Delete Success",
      data: deletedEmployee,
    })
  } catch (error) {
    res.send({
      status: false,
      error: "Gagal Menghapus Data Employee!",
    })
  }
})

module.exports = router
