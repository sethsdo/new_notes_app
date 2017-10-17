import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CreateService } from './create.service';
import { DisplayListComponent } from './create/display-list/display-list.component';
import { OrderbyPipe } from './orderby.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CreateComponent,
    DisplayListComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
