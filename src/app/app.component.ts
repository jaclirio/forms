import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  formData:any[] = [];

  handleReactiveFormSubmit(data: any) {
    console.log('works');
    this.formData.push(data);
  }
}
