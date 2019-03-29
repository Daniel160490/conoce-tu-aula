import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'access',
    pathMatch: 'full'
  },

  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'access', loadChildren: './public/access/access.module#AccessPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'tasks', loadChildren: './pages/tasks/tasks.module#TasksPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'event-modal', loadChildren: './pages/event-modal/event-modal.module#EventModalPageModule' },
  { path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxPageModule' },
  { path: 'mailbox-detail', loadChildren: './pages/mailbox/mailbox-detail/mailbox-detail.module#MailboxDetailPageModule' },
  { path: 'pendientes', loadChildren: './pages/pendientes/pendientes.module#PendientesPageModule' },
  { path: 'terminadas', loadChildren: './pages/terminadas/terminadas.module#TerminadasPageModule' },
  { path: 'agregar', loadChildren: './pages/agregar/agregar.module#AgregarPageModule' },
  { path: 'listas', loadChildren: './pages/listas/listas.module#ListasPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  { path: 'help1', loadChildren: './pages/help/help1/help1.module#HelpPage1Module' },
  { path: 'help2', loadChildren: './pages/help/help2/help2.module#HelpPage2Module' },
  { path: 'help3', loadChildren: './pages/help/help3/help3.module#HelpPage3Module' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
