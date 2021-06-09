const Calls = require('../models/calls')

exports.getCalls = (req, res) => {
  res.send('teste')
}

exports.createItem = async (req, res) => {
  try {
    const call = req.body
    const response = await Calls.create(call)
    res.status(200).json(response)
  } catch (error) {
    console.error(error)
  }
}
