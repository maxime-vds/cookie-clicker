const express = require('express')
const router = express.Router()
const Model = require('../model/model');
module.exports = router;

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        user: req.body.user,
        totalcookies: req.body.totalcookies,
        cookies: req.body.cookies,
        multiplier: req.body.multiplier,
        automater: req.body.automater,
        boosters: req.body.boosters
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})

    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
   try{
        const data = await Model.find();
        res.json(data)
   }
   catch(error){
        res.status(500).json({message: error.message})
   }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
   try{
    const data = await Model.findById(req.params.id)
    res.json(data)
   }
   catch(error){
    res.status(500).json({message: error.message})
   }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body
        const options = {new:true}

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.user} has been deleted ...`)
    }
    catch{
        res.status(400).json({message: error.message})
    }
})