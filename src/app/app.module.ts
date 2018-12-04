import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        // HomeComponent,
        // ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
