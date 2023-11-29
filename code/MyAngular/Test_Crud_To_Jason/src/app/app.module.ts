import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { BlogPostComponent } from './blog-post/blog-post.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [
    provideHttpClient(
      withFetch()

    
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
