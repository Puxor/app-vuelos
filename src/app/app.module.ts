import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AppRoutingModule } from './app-routing.module';
import { VuelosService } from './services/vuelos.service';
import { CommonModule } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VuelosComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [VuelosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
