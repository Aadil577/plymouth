import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment {
  @Output() tokenGenerated = new EventEmitter<string>();
  loading = false;
  message = '';
  paymentForm!: FormGroup;
constructor(private fb: FormBuilder) {
 
}
  ngOnInit() {
     this.paymentForm = this.fb.group({
    cardNumber: [
      '',
      [Validators.required, Validators.pattern(/^\d{16}$/)]
    ],
    expiry: [
      '',
      [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]
    ],
    cvc: [
      '',
      [Validators.required, Validators.pattern(/^\d{3,4}$/)]
    ],
    postalCode: [
      '',
      [Validators.required, Validators.pattern(/^\d{5}$/)]
    ]
  });
  }
  

  

  get f() {
    return this.paymentForm.controls;
  }

  submit() {
    if (this.paymentForm.invalid) return;

    this.loading = true;

    const token = this.tokenize();

    this.callDummyPaymentAPI(token);
  }

  /** Simulated client-side tokenization */
  private tokenize(): string {
    return btoa(
      JSON.stringify({
        token: 'tok_' + crypto.randomUUID(),
        timestamp: Date.now()
      })
    );
  }

  /** Dummy API call */
  private callDummyPaymentAPI(token: string) {
    console.log('Sending token only:', token);

    setTimeout(() => {
      this.loading = false;

      const success = Math.random() > 0.3;

      this.message = success
        ? 'Payment Successful'
        : 'Payment Failed';

      this.tokenGenerated.emit(token);
      this.paymentForm.reset();
    }, 1500);
  }
}
