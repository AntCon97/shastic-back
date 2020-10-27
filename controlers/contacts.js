const Contact = require('../models/Contact');

exports.getContacts = async (req, res, next) => {
    try{
        const contacts = await Contact.find(req.query);

        res.status(200).json({ success: true, data: contacts});
    }catch(err){
        res.status(400).json({ success: false }); 
    }
} 

exports.getContact = async (req, res, next) => {
    try{
        const contact = await Contact.findById(req.params.id);
        if(!contact){
            return res.status(400).json({ success: false }); 
        }

        res.status(200).json({ success: true, data: contact});
    }catch(err){
        res.status(400).json({ success: false }); 
    }
} 

exports.updateContacts = async (req, res, next) => {
    console.log(req.body);
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!contact){
        return res.status(400).json({ success: false})
    }

    res.status(200).json({ success: true, data: contact})
} 

