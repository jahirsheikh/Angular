import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseurl:string= "http://localhost:3000/posts/"


  constructor(private http:HttpClient) { }


  teacherpost(data:any){
    return this.http.post<any>(this.baseurl,data)
    .pipe(map(
      (res=>{
        return res;
      })
    ))

  }

  getAllTeacher(){
    return this.http.get<any>(this.baseurl)
    .pipe(map(
      (res=>{
        return res;
      })
    ))

  }
  deleteTeacher(id:number){
    return this.http.delete<any>(this.baseurl+id)
    .pipe(map(
      (res=>{
        return res;
      })
    ))

  }


  editThecaher(id:number, row:any){
    return this.http.put<any>(this.baseurl+id, row)
    .pipe(map(
      (res=>{
        return res;
      })
    ))

  }
}
