import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ObservablesRoutingModule } from './observables-routing.module';



@NgModule({
  declarations: [
    RootComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
