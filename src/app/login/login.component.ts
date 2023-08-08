import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "LOGIN";

  EmailId:string='';
  password:string='';

  login()
  {
    console.log('EmailId', this.EmailId);
    console.log('password',this.password);
  }
   path:string="../assets/th.jpg";

}
