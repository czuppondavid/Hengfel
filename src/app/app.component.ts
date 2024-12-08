/*
* File: app.component.ts
* Author: Czuppon Dávid
* Copyright: 2024,Czuppon Dávid
* Group: Szoft II/2/E
* Date: 2024-12-08
* Github: https://github.com/czuppondavid/
* Licenc: MIT
*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HengerComponent } from "./henger/henger.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HengerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hengfel';
  
}
