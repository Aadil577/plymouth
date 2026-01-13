import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor() { }

  makePayment(token: string): Observable<any> {
    console.log('PaymentService: Making payment with token:', token);
    // Simulate an API call
    return of({ success: true, message: 'Payment processed successfully' });
  }
}
