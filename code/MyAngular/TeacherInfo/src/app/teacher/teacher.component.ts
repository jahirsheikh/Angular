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
      name: [''],
      gender: [''],
      hobby_reading: [false],
      hobby_gaming: [false],
      hobby_fishing: [false],
      hobby_sleeping: [false],
      

    });
    this.getAll();

}

saveTeacher() {

    
  this.teachermodel.name = this.formValue.value.name;
  this.teachermodel.gender = this.formValue.value.gender;
  // this.teachermodel.hobby = this.formValue.value.hobby;

  let hobbies: string[] =[];
  if(this.formValue.value.hobby_reading){
    hobbies.push('Reading');

  }
  if(this.formValue.value.hobby_gaming){
    hobbies.push('Gaming');

  }
  if(this.formValue.value.hobby_fishing){
    hobbies.push('Fashing');

  }
  if(this.formValue.value.hobby_sleeping){
    hobbies.push('Sleeping');

  }
  this.teachermodel.hobby=hobbies;
  

  this.services.teacherpost(this.teachermodel)
    .subscribe(res => {
      console.log(res);
      alert("Teacher Added")
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

deleteTeacher(row:any){

  this.services.deleteTeacher(row.id)
  .subscribe(res => {
    console.log(res);
    alert("Teacher Deleted")
    this.formValue.reset();
    this.getAll();
    
  },
    err => {
      alert("Data Not data")
    }

  )

}


onEdite(row: any) {
  this.teachermodel.id=row.id;
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['gender'].setValue(row.gender);
  // this.formValue.controls['hobby'].setValue(row.hobby);
 
  this.formValue.controls['hobby_reading'].setValue(row.hobby.includes('Reading'));
  this.formValue.controls['hobby_gaming'].setValue(row.hobby.includes('Gaming'));

}

teacherEdit(){

  this.teachermodel.name = this.formValue.value.name;
  this.teachermodel.gender = this.formValue.value.gender;
  // this.teachermodel.hobby = this.formValue.value.hobby;

  let hobbies: string[] =[];
  if(this.formValue.value.hobby_reading){
    hobbies.push('Reading');

  }
  if(this.formValue.value.hobby_gaming){
    hobbies.push('Gaming');

  }
  if(this.formValue.value.hobby_fishing){
    hobbies.push('Fashing');

  }
  if(this.formValue.value.hobby_sleeping){
    hobbies.push('Sleeping');

  }
this.teachermodel.hobby= hobbies;


  this.services.editThecaher(this.teachermodel.id ,this.teachermodel)
  .subscribe(res => {
    console.log(res);
    alert("Teacher Updated")
    this.formValue.reset();
    this.getAll();
    
  },
    err => {
      alert("Data Not Update")
    }

  )

}






}