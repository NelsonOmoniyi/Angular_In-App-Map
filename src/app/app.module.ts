import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDirzmH1zM5fqHgPg9WuqISIMxmTshfZvA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
