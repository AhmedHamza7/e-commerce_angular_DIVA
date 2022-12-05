import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'
import { MinimizeDescPipe } from '../minimize-desc.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MinimizeDescPipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
  ],
  exports: [
    HeaderComponent,
    MinimizeDescPipe,
    SpinnerComponent

  ]
})
export class SharedModule { }
