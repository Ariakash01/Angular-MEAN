import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ProjectComponent } from './pages/project/project.component';
import { canActiveChildGuard } from './can-active-child.guard';
import { loginGuard } from './login.guard';
import { employeeDeactiveGuard } from './employee-deactive.guard';


export const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [loginGuard] },
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path: "register", component: RegisterComponent },
    { path: "home", component: HomeComponent },
    {
        path: "app", component: NavBarComponent, canActivate: [AuthGuard], canActivateChild: [canActiveChildGuard], children: [
            { path: "add-employee", component: AddEmployeeComponent, canDeactivate: [employeeDeactiveGuard] },
            { path: "admin-profile", component: AdminProfileComponent },
            { path: "employees", component: EmployeesComponent },
            { path: "project", component: ProjectComponent }
        ]
    }
];
