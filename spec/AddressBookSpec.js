describe("Address Book", () => {
  let addressBook;
  let contact;

  beforeEach(() => {
    addressBook = new AddressBook();
    contact = new Contact();

    addressBook.addContact(contact);
  });

  it("should be able to add a contact", () => {
    expect(addressBook.getContact(0)).toBe(contact);
  });

  it("should be able to delete a contact", () => {
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});
