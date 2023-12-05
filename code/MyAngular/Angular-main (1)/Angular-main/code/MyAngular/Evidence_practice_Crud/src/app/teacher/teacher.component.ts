import { Component, OnInit } from '@angular/core';
import { TeacherModel } from './teacher.model';
import { FormGroup } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {

  Teachermodel : TeacherModel = new TeacherModel();

  formValue!:FormGroup;
  teacherdata:any;

  constructor(private services:TeacherService,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      gender: [''],
      hobby_reading: [false],
      hobby_gaming: [false],
      hobby_fishing: [false],
      hobby_sleeping: [false],
      department:['']
      

    });
    this.getAll();

}

saveTeacher(){


  this.Teachermodel= this.formValue.value.name;
  this.Teachermodel= this.formValue.value.gender;
  
  let hobbies: string[]=[];

  if(this.formValue.value.hobby_fishing){
    hobbies.push('Fishing')
  }
  if(this.formValue.value.hobby_gaming){
    hobbies.push('Gaming')
  }
  if(this.formValue.value.hobby_reading){
    hobbies.push('Readign')
  }
  if(this.formValue.value.hobby_sleeping){
    hobbies.push('Slepping')
  }
this.Teachermodel.hobby=hobbies;

this.Teachermodel= this.formValue.value.department


this.services.teacherpost(this.Teachermodel)
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
  this.Teachermodel.id=row.id;
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['gender'].setValue(row.gender);
 
  this.formValue.controls['hobby_reading'].setValue(row.hobby.includes('Reading'));
  this.formValue.controls['hobby_gaming'].setValue(row.hobby.includes('Gaming'));
  this.formValue.controls['department'].setValue(row.department);
}

teacherEdit(){

  this.Teachermodel.name = this.formValue.value.name;
  this.Teachermodel.gender = this.formValue.value.gender;

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
this.Teachermodel.hobby= hobbies;


  this.services.editThecaher(this.Teachermodel.id ,this.Teachermodel)
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