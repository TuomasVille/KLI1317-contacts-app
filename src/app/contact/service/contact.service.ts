import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor( private contactLocalStorage: ContactLocalStorageService ) {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'First', 'Contact', 'FirstStreet 1',
      'first.contact@email.com', '+358 12 1234'));
    this.contacts.push(new Contact(2, 'Second', 'Contact',
      'SecondStreet 2', 'second.contact@email.com', '+358 12 2345'));
    this.contacts.push(new Contact(3, 'Third', 'Contact',
      'ThirdStreet 3', 'third.contact@email.com', '+358 12 3456'));
    this.contacts.push(new Contact(4, 'Fourth', 'Contact',
      'FourthStreet 4', 'fourth.contact@email.com', '+358 12 4567'));
    this.contacts.push(new Contact(5, 'Fifth', 'Contact',
      'FifthStreet 5', 'fifth.contact@email.com', '+358 12 5678'));
    this.contacts.push(new Contact(6, 'Sixth', 'Contact',
      'SixthStreet 6', 'sixth.contact@email.com', '+358 12 6789'));
  }

  getContacts(): Contact[] {
    return this.contactLocalStorage.getContacts();
  }

  getContactById(id: string): Contact {
    return this.contactLocalStorage.getContactById(id);
  }

  deleteContact(contact: Contact) {
    this.contactLocalStorage.deleteContact(contact);
  }

  createContact(contact: Contact) {
    this.contactLocalStorage.createContact(contact);
  }

  editContact(contact: Contact) {
    return this.contactLocalStorage.editContact(contact);
  }
}
