import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent {
  //string interpolation
  welcomeMessage: string = 'Welcome to Angular World';
  user = {
    firstName: 'Sathish',
    lastName: 'Sampath',
  };



  // property binding
  propertyBinding = '<h1>Property binding</h1>';
  propertyDescription =
    'Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button features, set paths programmatically, and share values between components.';

    disabledButton = false

    btnClass = ''
    styles = '3px solid red'
    constructor() {
      // setInterval(()=>{
      //   this.disabledButton = !this.disabledButton
      //   this.btnClass = this.disabledButton ? 'btn-secondary' : 'btn-primary'
      // },3000)
    }

    //Event binding

    //input event
    inputValue = ''
    getInputValue(event:Event){

        this.inputValue = (<HTMLInputElement>event.target).value

        console.log(this.inputValue);

    }

    // basicDirective

    show = false

    showFun(event:Event){
      this.show = !this.show
      console.log(this.show);

    }


    names = ["Sathish","Inba","Bharathi","Sasi","sAMPATH"]

}
