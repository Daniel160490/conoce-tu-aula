import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams } from '@ionic/angular';
import { UsuariosUpdatePage } from './usuarios-update.page';

const routes: Routes = [
    {
        path: '',
        component: UsuariosUpdatePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UsuariosUpdatePage],
})
export class UsuariosUpdatePageModule {}