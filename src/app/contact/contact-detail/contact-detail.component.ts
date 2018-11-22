import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {ContactService} from '../service/contact.service';
import {Contact} from '../contact';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService, private snackBar: MatSnackBar) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.contact = this.contactService.getContactById(contactId);
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create Contact'));
    }
  }

  onSave() {
    console.log('ContactDetailComponent: onSave');
    this.router.navigate(['/contacts']);
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.contactService.editContact(this.contact);
      this.snackBar.open('Contact edited!', '', {
        duration: 3000
      });
    } else {
      this.contactService.createContact(this.contact);
      this.snackBar.open('Contact created!', '', {
        duration: 3000
      });
    }
  }
}

