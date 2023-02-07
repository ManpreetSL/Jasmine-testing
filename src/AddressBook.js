const AddressBook = function () {
  this.contacts = [];
  this.loaded = false;
};

AddressBook.prototype.addContact = function (contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function (index) {
  return this.contacts.at(index);
};

AddressBook.prototype.deleteContact = function (index) {
  this.contacts.splice(index, 1);
};

AddressBook.prototype.getContacts = function (callback) {
  setTimeout(() => {
    this.loaded = true;

    if (callback) return callback();
  }, 1000);
};
