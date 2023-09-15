import { Component } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Password Generator';
  password: string = '';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  length: number = 0;


  onChangeLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onChangeLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+";

    let validChars = '';

    if(this.useLetters){
      validChars += letters;
    } 
    if(this.useNumbers){ 
      validChars += numbers;
    } 
    if(this.useSymbols){ 
      validChars += symbols;
    } 

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
