import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {Router} from '@angular/router';
import {MatDialogModule} from '@angular/material';
import {ContactLocalStorageService} from '../service/contact-local-storage.service';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;

  constructor(private contactService: ContactService, private toolbar: ToolbarService, private router: Router,
              private dialog: MatDialogModule) {
    this.contactSelect = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts Application'));
    console.log(this.contact);
  }

  onContactSelect() {
    this.contactSelect.emit();
  }

  onDelete(contact: Contact) {
    this.contactService.deleteContact(contact);
  }

  onEdit() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }
}
