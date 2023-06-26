const express = require("express");
const contactsAPIRouter = express.Router();

const { getContacts } = require("./getContactsController");

// http://localhost:3000/api/contacts?sort='';%20drop%20table%20contacts;--
// without input sanitizing this url would drop the table `contacts`

contactsAPIRouter.get("/", getContacts);

module.exports = {
    contactsAPIRouter
};