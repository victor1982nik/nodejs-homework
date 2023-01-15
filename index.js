const contactsApi = require('./contacts');
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone } ) {  
  switch (action) {
    case "list":
      const contacts = await contactsApi.listContacts();
      console.table(contacts);
      break;
    case "get":
      const contact = await contactsApi.getContactById(String(id));
      console.log("get", contact);
      break;
    case "add":
      const contactToAdd = await contactsApi.addContact(name, email, String(phone));
      console.log("Added contact", contactToAdd)
      break;
    case "remove":
      await contactsApi.removeContact(String(id));
      console.log(`Deleted succesfully contact with id ${id}`);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
invokeAction(argv);
