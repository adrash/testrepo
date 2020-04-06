import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Service1Component } from './parent/ServiceForData/service1/service1.component';
import { Service2Component } from './parent/ServiceForData/service2/service2.component';
import { MessageServiceService } from './parent/ServiceForData/message-service.service';
import { New1Component } from './forservice/new1/new1.component';
import { New2Component } from './forservice/new2/new2.component';
import { New3Component } from './forservice/new3/new3.component';
import { New4Component } from './forservice/new4/new4.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Service1Component,
    Service2Component,
    New1Component,
    New2Component,
    New3Component,
    New4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
