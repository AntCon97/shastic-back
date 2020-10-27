const express = require('express');
const {getContacts, updateContacts, getContact } = require('../controlers/contacts')

const router = express.Router();

router.route('/').get(getContacts)

router.route('/:id').get(getContact).put(updateContacts);




module.exports = router;