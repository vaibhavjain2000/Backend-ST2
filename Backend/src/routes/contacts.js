const express = require('express');
const router = express.Router();
const Contact = require("../models/contacts");

router.get('/contacts',async (req, res) =>{
    try{
        const contacts = await Contact.find({});
        res.status(200).send(contacts);
    }catch(e){
        res.status(400).send();
    }
});

router.post('/contacts', async(req, res) =>{
    const contact = new Contact({
        ...req.body
    });
    
    try{
        await contact.save();
        res.status(201).send(contact);
    }catch(e) {
        res.status(400).send(e);
    }
});

router.delete("/contacts/:id", async(req, res) =>{
    try{
        const contact = await Contact.findOneAndDelete({_id: req.params.id});
        if(!contact) {
            return res.status(404).send();
        }
        res.send(contact);
    }catch(e){
        res.status(500).send();
    }
});

module.exports = router;