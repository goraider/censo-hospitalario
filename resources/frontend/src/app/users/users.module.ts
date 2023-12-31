import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { ConfirmPasswordDialogComponent } from './confirm-password-dialog/confirm-password-dialog.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { getEspPaginatorIntl } from '../esp-paginator-intl';
import { MatChipsModule } from '@angular/material/chips';
import { ConfirmActionDialogComponent } from '../utils/confirm-action-dialog/confirm-action-dialog.component';



@NgModule({
    declarations: [FormComponent, UsersComponent, ConfirmPasswordDialogComponent],
    imports: [
        CommonModule,
        MatChipsModule,
        UsersRoutingModule,
        SharedModule
    ],
    providers: [
        { provide: MatPaginatorIntl, useValue: getEspPaginatorIntl() }
    ]
})
export class UsersModule { }
