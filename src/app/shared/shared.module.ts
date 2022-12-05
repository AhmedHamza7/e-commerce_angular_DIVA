import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { MinimizeDescPipe } from '../minimize-desc.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    MinimizeDescPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
  ],
  exports: [
    HeaderComponent,
    MinimizeDescPipe

  ]
})
export class SharedModule { }
