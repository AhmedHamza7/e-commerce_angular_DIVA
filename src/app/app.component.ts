import { Component, Input } from '@angular/core';
import * as AOS from 'aos'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  ngOnInit(): void{
    
  AOS.init();

  }
}
