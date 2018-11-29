import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any>;

  constructor(private contactService: ContactService, private toolbar: ToolbarService, private router: Router, private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.contactDeleted = new EventEmitter<any>();
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts Application'));
    console.log(this.contact);
  }

  onEdit() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  removeContact() {
    this.dialog.open(ConfirmDialogComponent);
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.snackBar.open('Contact removed!', '', {
        duration: 3000
      });
      this.contactDeleted.emit(this.contact);
    });
  }
}
