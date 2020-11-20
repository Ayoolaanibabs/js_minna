const express = require('express');
const People = require('../Models/peopleModel');
const router = express.Router();



router.get('/', async(req, res, next)=>{
    try{
        const results = await People.find({}, {__v: 0})
        res.send(results)
    }catch(error){
        console.log(error.message)
    }
});

router.post('/', async (req, res, next)=>{
    try {
        const people = new People(req.body);
        const result = await people.save();
        res.send(result);
    } catch (error){
        console.log(error.message)
    }
})

router.delete('/:id', async (req, res, next)=>{
    const id = req.params.id
    try{
        const result = await People.findByIdAndDelete(id)
        res.send(result)
    }catch (error){
        console.log(error.message)
    }
})
module.exports = router