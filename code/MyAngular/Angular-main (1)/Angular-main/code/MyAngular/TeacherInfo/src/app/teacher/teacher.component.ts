import { Component, OnInit } from '@angular/core';
import { TeacherModel } from './teacher.model';
import { TeacherService } from '../services/teacher.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {

  teachermodel : TeacherModel = new TeacherModel();

  formValue !: FormGroup;
  teacherdata:any;

  constructor(private services:TeacherService, private formBuilder:FormBuilder){


  }

  
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      roll: [''],
      name: [''],
      department: [''],
      marks: [''],

      

    });
    this.getAll();

}

saveTeacher() {

    
  this.teachermodel.roll = this.formValue.value.roll;
  this.teachermodel.name = this.formValue.value.name;
  
 
  this.teachermodel.department= this.formValue.value.department;

  this.teachermodel.marks = this.formValue.value.marks;

  

  this.services.teacherpost(this.teachermodel)
    .subscribe(res => {
      console.log(res);
      alert("Student Added")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("Data Not save")
      }

    );
}

getAll(){
  this.services.getAllTeacher()
  .subscribe(res => {
    this.teacherdata=res;     
    
  })
}

      // Method

deleteTeacher(row:any){

  this.services.deleteTeacher(row.id)
  .subscribe(res => {
    console.log(res);
    alert("Student Deleted")
    this.formValue.reset();
    this.getAll();
    
  },
    err => {
      alert("Data Not data")
    }

  )

}

        // method
onEdite(row: any) {
  this.teachermodel.id=row.id;
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['department'].setValue(row.department);
  this.formValue.controls['marks'].setValue(row.marks);
 


}

  // method
teacherEdit(){

  this.teachermodel.roll = this.formValue.value.roll;
  this.teachermodel.name = this.formValue.value.name;
  this.teachermodel.marks = this.formValue.value.marks;
  
  this.teachermodel.department= this.formValue.value.department;

 

  this.services.editThecaher(this.teachermodel.id ,this.teachermodel)
  .subscribe(res => {
    console.log(res);
    alert("Student Updated")
    this.formValue.reset();
    this.getAll();
    
  },
    err => {
      alert("Data Not Update")
    }

  )

}






}