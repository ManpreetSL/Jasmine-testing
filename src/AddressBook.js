const AddressBook = function() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts.at(index);
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}