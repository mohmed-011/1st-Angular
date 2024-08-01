import { Component } from '@angular/core';
import { Star2Component } from "../star2/star2.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [Star2Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PORTFOLIOComponent {
  images:string[]=[
    "./assets/images/poert1.png",
    "./assets/images/port2.png",
    "./assets/images/port3.png",
    "./assets/images/poert1.png",
    "./assets/images/port2.png",
    "./assets/images/port3.png"]

    Changeimg(item:string):void{
      this.nowImge=item;
      console.log(this.nowImge);
      document.querySelector(".lyer2")?.classList.remove("d-none")
    }
    nowImge:string="";

    Hodeimg():void{
      document.querySelector(".lyer2")?.classList.add("d-none")
    }
    Stayimg():void{
      document.querySelector(".lyer2")?.classList.remove("d-none")
    }
}


// let images = document.querySelectorAll(".innerproto")
// for (let index = 0; index < images.length; index++) {
//   addEventListener("click",()=>{
//     console.log("hello");

//   })

// }
