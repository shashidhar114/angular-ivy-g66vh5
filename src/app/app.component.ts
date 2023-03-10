import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  // @ViewChild('registerForm') form: NgForm | undefined;
  defaultCountry: string = "India"
  email: any;
  password: any;
  number: any;
  name: any;
  defaultName: string = 'Male';

  form:NgForm | undefined

  gender = [   
    {value: 'Male' },        
    {value: 'Female' },
    {value: 'Others' }
  ]

  submitForm(form:NgForm) {
    console.log(form)
  }

  setValue(){
this.form?.setValue({
  country:'',
  fname:'Shashi',
});
  }
 

}


