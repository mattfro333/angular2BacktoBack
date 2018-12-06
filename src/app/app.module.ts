import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { NavComponent } from './shared/navbar.component.ts';
import { HomeComponent } from './home/home.component.ts';
import { ErrorComponent } from './error/error.component.ts';
import { AppRoutingModule } from './shared/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
