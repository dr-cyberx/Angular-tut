import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SuccessAlert } from './successAlert/successAlert.component';

@NgModule({
  declarations: [AppComponent, ErrorAlertComponent, SuccessAlert],
  imports: [
    BrowserModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
