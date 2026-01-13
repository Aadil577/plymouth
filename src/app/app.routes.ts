import { Routes } from '@angular/router';
import { Payment } from './payment/payment';
import { Success } from './success/success';
import { Failure } from './failure/failure';

export const routes: Routes = [
    {
        path:'', component: Payment
    },
    {
        path:'payment', component: Payment
    },
    {
        path:'success', component: Success
    },
    {
        path:'failure', component: Failure
    }
];
