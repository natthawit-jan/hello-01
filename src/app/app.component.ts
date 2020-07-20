import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname = '';
  lastname = '';
  result='';
  colors = ['red', 'blue', 'green'];
  
  inputYourName(event: any) : void {
    this.firstname = event.target.value;
    
  }

  processFullname(): void {
    this.result = this.firstname + " " + this.lastname
  }

  inputLastname(lastname: string): void {
    this.lastname = lastname;
  }
}
