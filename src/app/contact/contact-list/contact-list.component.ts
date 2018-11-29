import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {Router} from '@angular/router';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts Application'));
    // this.contacts = this.contactService.getContacts();
    this.loadContacts();
  }

  onContactDeleted(contact: Contact) {
    this.loadContacts();
  }

  onContactCreate(): void {
    console.log('Create clicked!');
    this.router.navigate(['/contacts/new']);
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    });
  }
}
