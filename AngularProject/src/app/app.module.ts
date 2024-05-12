import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyService } from './MyService';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ModelBoxEditProductComponent } from './model-box-edit-product/model-box-edit-product.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}
const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter
    //allowedDomains: ["https://localhost:44492"]
    //disallowedRoutes: ["http://example.com/examplebadroute/"],
  }
};


@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    HomeComponent,
    ListProductComponent,
    CreateUserComponent,
    LoginUserComponent,
    ModelBoxEditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot(JWT_Module_Options),
    ReactiveFormsModule,
    FormsModule, // Add FormsModule to imports array
    RouterModule.forRoot([
      { path: 'createproduct', component: CreateProductComponent, pathMatch: 'full' },
      { path: '', component: HomeComponent, pathMatch: 'full' }

    ])
  ],
  providers: [MyService], // Make sure your service is provided here
  bootstrap: [AppComponent],
  
})
export class AppModule { }
