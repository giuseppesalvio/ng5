import { Component, OnInit } from '@angular/core';
import { Text } from '@angular/compiler';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *',[
        query(':enter',style({ opacity:0 }),{optional : true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity : 0, transform: 'traslateY(-75%)',offset :0}),
            style({opacity : .5, transform: 'traslateY(35px)',offset :.3}),
            style({opacity : 1, transform: 'traslateY(0)',offset :1})
          ]))
        ]),{optional : true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity : 1, transform: 'traslateY(0)',offset :0}),
            style({opacity : .5, transform: 'traslateY(35px)',offset :.3}),
            style({opacity : 0, transform: 'traslateY(-75%)',offset :1})
          ]))
        ]),{optional : true})
      ])
    ]
  )
  ]
})

/*
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})*/
export class AboutComponent implements OnInit {

  itemCount: number ;

  btnText: string = 'Add an item';
  goalText: string = 'my first goal';

  goals = [];

  constructor(private route: ActivatedRoute, private router: Router,private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res=> this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }
}



