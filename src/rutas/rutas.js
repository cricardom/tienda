const express = require('express');
const router = express.Router();
const Cliente = require('../modelo/cliente.model');

router.get('/', async (req, res) => {
  const clientes = await Cliente.find();
  console.log(clientes);
  res.json({
    clientes: clientes
  })
});

router.get('/:id', async (req, res) => {
  const cliente = await Cliente.findById(req.params.id)
  res.json({
    cliente: cliente
  })
});

router.post('/', async (req, res) => {
  const {nombre, apellido, correo, telefono, direccion} = req.body;
  const cliente = new Cliente({
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    direccion: direccion
  });
  await cliente.save();
  res.json({
    message: 'Cliente almacenado en la base de datos!'
  })
});

router.put('/:id', async (req, res) => {
  const {nombre, apellido, correo, telefono, direccion} = req.body;
  const clienteUpdate = {
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    direccion: direccion
  }
  await Cliente.findByIdAndUpdate(req.params.id, clienteUpdate, {useFindAndModify: false});
  res.json({
    message: 'Cliente actualizado!'
  });
})

router.delete('/:id', async (req, res) => {
  await Cliente.findByIdAndRemove(req.params.id, {useFindAndModify: false});
  res.json({
    message: 'El cliente se ha eliminado!'
  })
})

module.exports = router;