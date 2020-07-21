import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";
import { SignupComponent } from './signup/signup.component';

const register: Route[] = [
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(register)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
