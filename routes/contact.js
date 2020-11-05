const express = require('express');
const {getContacts, updateContacts, getContact, createContact } = require('../controlers/contacts')

const router = express.Router();

router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getContact).put(updateContacts);




module.exports = router;