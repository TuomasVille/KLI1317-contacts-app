import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSave() {
    console.log('ContactDetailComponent: onSave');
    this.router.navigate(['/contacts']);
  }

}
