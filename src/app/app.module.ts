import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountserviceService } from './account/accountservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AccountModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    AccountserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
