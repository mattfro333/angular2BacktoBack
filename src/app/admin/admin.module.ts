import { NgModules } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } '@angular/router';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent } from '/adminMenu/admin-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signUp/sign-up.component';

import { UserService } from './adminShared/user.service';

const AdminRoutes: Routes = [
  {
    path:'admin',
    component: AdminComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: '', component: AdminMenuComponent, canActivate: [UserService] }
    ]
  },
];
@NgModules({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminMenuComponent,
    LoginComponent,
    SignUpcomponent
  ],
  providers: [
    UserService,
  ]
})
export class AdminModule {}
