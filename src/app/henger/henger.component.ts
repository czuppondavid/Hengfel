/*
* File: henger.component.ts
* Author: Czuppon Dávid
* Copyright: 2024,Czuppon Dávid
* Group: Szoft II/2/E
* Date: 2024-12-08
* Github: https://github.com/czuppondavid/
* Licenc: MIT
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-henger',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './henger.component.html',
  styleUrl: './henger.component.css'
})
export class HengerComponent {

  radius ! : number;
  height ! : number;
  area ! : number;

  startCalc(){

    this.area = 2 * Math.PI * this.radius * ( this.radius + this.height );
  
  }
}
