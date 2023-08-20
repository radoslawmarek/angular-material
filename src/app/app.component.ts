import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  form = new FormGroup({
    firstName: new FormControl('Abrakadabra'),
    userChoose: new FormControl('2')
  });

  submit() {
    console.log(this.form.value);
  }

}
