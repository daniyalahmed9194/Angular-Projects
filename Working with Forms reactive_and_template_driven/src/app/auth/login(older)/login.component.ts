import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-info'); // recieves in string but we have passed the object.

      if (savedForm) {
        const loadedFromData = JSON.parse(savedForm);
        const savedEmail = loadedFromData.email;
        // this.form().setValue({
        //   email: savedEmail,
        //   password: ''
        // });
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      } // will convert it in object
      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-login-info',
              JSON.stringify({ email: value.email })
            ),
        }); // this is to save entered value initially, debaunce time updates the email after 500 ms. so that it does not hold on every key stroke.
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }
  onSubmit(formData: NgForm) {
    console.log(formData);
    formData.reset();
  }
}
