import { Component, OnInit } from '@angular/core';
import {studentService  } from '../student.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  student:any[]=[];
constructor(private studentService:studentService){}
ngOnInit(){
  this.studentService.getstudents().subscribe((data)=>{
    this.student=data;
  
    })
  }
}