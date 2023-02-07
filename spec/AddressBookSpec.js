describe("Address Book", () => {
  it("should be able to add a contact", () => {
    let addressBook = new AddressBook();
    let thisContact = new Contact();

    addressBook.addContact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', () => {
    let addressBook = new AddressBook();
    let contact = new Contact();

    addressBook.addContact(contact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
