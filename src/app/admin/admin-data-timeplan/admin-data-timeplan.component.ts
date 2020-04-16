import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import * as p5 from 'p5';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-data-timeplan',
  templateUrl: './admin-data-timeplan.component.html',
  styleUrls: ['./admin-data-timeplan.component.scss']
})
export class AdminDataTimeplanComponent implements OnInit {
  canvas: any;
  timeForm = new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl(),
    new FormControl()
  ]);
  shift = ["09:00:00","11:00:00","14:00:00","17:00:00"];

  constructor() { }

  ngOnInit(): void {
    this.drawTimeLine();
  }

  drawTimeLine() {
    const sketch = s => {
      var x_start;
      var x_end;
      var y;
      s.setup = () => {
        s.createCanvas(800,400).parent('p5-sketch');
        x_start = 0.1*s.width;
        x_end = 0.9*s.width;
        y = 0.8*s.height;
      }

      s.draw = () => {
        s.clear();
        s.background(0,100);
        // Baseline
        s.strokeWeight(4);
        s.stroke(0);
        let baseline = s.line(x_start, y, x_end, y);

        // data
        s.strokeWeight(4);
        s.stroke(0);
        s.fill(100,255,0,200);
        for(let i=0; i<this.shift.length; i+=2){
          let x_1 = s.map(moment.duration(this.shift[i]).asHours(),0,24,x_start,x_end);
          let y_1 = y
          let width = s.map(moment.duration(this.shift[i+1]).asHours(),0,24,x_start,x_end)-s.map(moment.duration(this.shift[i]).asHours(),0,24,x_start,x_end);
          let height = -s.height*0.2;
          s.rect(x_1, y_1, width, height);
        }
      };

    }
    this.canvas = new p5(sketch);
  }

  ngOnDestroy(): void {
    this.canvas.remove(p5);
  }

  updateCanvasData(): void {
    let time = this.timeForm.value.time;
    console.log(time);

  }

  onSubmit(): void {

  }

}
