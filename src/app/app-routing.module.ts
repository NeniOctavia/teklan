import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { LoginComponent } from './pages/login/login.component';
import { BerandaComponent } from './pages/beranda/beranda.component';


const routes: Routes = [
{
path:'home',
component:HomeComponent
},
{
path:'student',
component:StudentComponent
},
{
path:'login',
component:LoginComponent
},
{
path:'beranda',
component:BerandaComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
