import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-abb',
  templateUrl: './abb.component.html',
  styleUrls: ['./abb.component.scss']
})
export class AbbComponent implements OnInit {

  goals: any;
  constructor(private route: ActivatedRoute, private router: Router,private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeAbout() {
    this.router.navigate(['about']);
  }
}
