import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  countryList:Country[] = [
    new Country('1','India'),
    new Country('2','USA'),
    new Country('3','England'),
  ];

  onSubmit(form:NgForm){
    console.log(form.value);
  }

}
class Country{
  id:string;
  name:string;

  constructor (id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
