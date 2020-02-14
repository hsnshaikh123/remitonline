import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signform: FormGroup;
  submitted = false;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.signform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.signform.controls; }

  onSubmit() {
    this.submitted = true;

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signform.value));
    if (this.signform.invalid) {
      return;
  }
    var user_email = this.signform.value.email;
    var user_pass = this.signform.value.password;
    if(user_email == 'admin@remitonline.info' && user_pass== 'admin@123'){
      this.router.navigate(["home"]);

    }else{
      alert("wrong creditinals..");
    }
  }
}
