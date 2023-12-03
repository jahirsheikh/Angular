import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test_Crud_To_Jason';

  tile='Start here angular';

  hello='amar sonar bangaldesh'

  blogs=['blog 1','blog 2','blog 3']

  number=1;

  imgurl="https://media.licdn.com/dms/image/D5603AQFzjh2QLXeYkg/profile-displayphoto-shrink_200_200/0/1684037664750?e=1706745600&v=beta&t=goH58zRmKqjbu8YG1ha7KCDhi3vST9ort-2_gg_GQ8w";

  onClick(e:any){
    // console.log('Button Clicked',e)

    this.number--


  }
}
