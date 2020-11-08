const express = require('express');
const {
  getContacts,
  updateContacts,
  getContact,
  createContact,
  deleteContacts,
} = require('../controlers/contacts');

const router = express.Router();

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContacts).delete(deleteContacts);

module.exports = router;
