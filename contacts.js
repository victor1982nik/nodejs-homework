const fs = require("fs").promises;
const path = require("path");
const { mainModule } = require("process");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.normalize("./db/contacts.json");

async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    //console.table(JSON.parse(response))
    return JSON.parse(response);
  } catch (error) {
    console.error("listContacts", error);
  }
}

async function getContactById(contactId) {
  try {
    const ListContacts = await listContacts();
    const contact = ListContacts.filter((item) => item.id === contactId);
    //console.log("getContactById",contact);
    return contact;
  } catch (e) {
    console.error("getContactById", error);
  }
}

async function removeContact(contactId) {
  try {
    const ListContacts = await listContacts();
    const ListAfterDelete = ListContacts.filter(item => item.id !==contactId)
    //console.table(ListAfterDelete);
    await fs.writeFile(contactsPath, JSON.stringify(ListAfterDelete));
    return contactId;
  } catch (error) {
    console.error("removeContact", error);
  }
}

async function addContact(name, email, phone) {
  try {
    const ListContacts = await listContacts();
    const contact = {
      id: uuidv4(),
      name,
      email,
      phone,
    }
    ListContacts.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(ListContacts));
    return contact;
  } catch (error) {
    console.error("addContact", error);
  }
}

module.exports = {
  addContact,
  removeContact,
  getContactById,
  listContacts,
}