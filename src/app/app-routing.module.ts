import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'tasks', loadChildren: './pages/tasks/tasks.module#TasksPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'event-modal', loadChildren: './pages/event-modal/event-modal.module#EventModalPageModule' },
  { path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxPageModule' },
  { path: 'mailbox-detail', loadChildren: './pages/mailbox/mailbox-detail/mailbox-detail.module#MailboxDetailPageModule' },
  { path: 'access', loadChildren: './public/access/access.module#AccessPageModule' },
  // { path: 'pendientes', loadChildren: './pages/pendientes/pendientes.module#PendientesPageModule' },
  // { path: 'terminadas', loadChildren: './pages/terminadas/terminadas.module#TerminadasPageModule' },
  // { path: 'agregar', loadChildren: './pages/agregar/agregar.module#AgregarPageModule' },
  // { path: 'listas', loadChildren: './pages/listas/listas.module#ListasPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
