import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from 'src/app/carts/components/cart/cart.component';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _sharedService:SharedService) { 
  }


  ngOnInit(): void {

    
  }

}
