import { Component } from '@angular/core';
import { Payment } from '../payment/payment';
import { Router } from '@angular/router';
import { PaymentService } from '../payment/payment.service';

@Component({
  selector: 'app-card',
  imports: [Payment],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  constructor(private paymentService: PaymentService, private router: Router) {}
 onPaymentToken(token: string) {
    console.log('Received payment token:', token);
    this.paymentService.makePayment(token).subscribe({
    next: () => this.router.navigate(['/success']),
    error: () => this.router.navigate(['/failure'])
  });
  }
}
