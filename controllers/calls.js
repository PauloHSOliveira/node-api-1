const Calls = require('../models/calls')

exports.getCalls = (req, res) => {
  res.send('teste')
}

exports.createItem = async (req, res) => {
  try {
    const call = req.body
    await Calls.create(call,res)
  } catch (error) {
    console.error(error)
  }
}
