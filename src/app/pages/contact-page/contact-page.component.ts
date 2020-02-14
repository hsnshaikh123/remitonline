import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,) {
    
   }
   contactform: FormGroup;
   contact:any;
    ngOnInit() {
      this.createForm();
    }
    createForm() {
      this.contactform = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        email: ['', [Validators.required, Validators.email, Validators.pattern("[^ @]*@[^ @]*")] ],
        number: ['', [Validators.required, Validators.pattern] ],
        subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        message: '',
    });

  }

  onClickSubmit(data) {
    console.log(this.contact);
    this.contact = this.contactform.value;
    this.contactform.reset({
      name: '',
      email: '',
      number: '',
      subject: '',
      message: ''
    });
  }

}
