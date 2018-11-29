import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor(private contactLocalStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
    this.contacts = [];
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  getContactsById(id: string): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }

  deleteContact(contact: Contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }

  /*
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
  */
}
