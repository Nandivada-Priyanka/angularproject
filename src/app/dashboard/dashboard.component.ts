import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class dashboardComponent {
Data=[
  {Technology:'AI',discover:'John McCarthy'},
  {Technology:'ML',discover:'Geoffrey Hinton'}
]
}
