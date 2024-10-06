import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  contactForm = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    gender : new FormControl(),
    isMarried : new FormControl(),
    country : new FormControl(),
    address : new FormGroup({
      city : new FormControl(),
      street : new FormControl(),
      pincode : new FormControl(),
    })
  })

  onSubmit(){
    console.log(this.contactForm.value);
    
  }
}
