import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService , private route: ActivatedRoute) { }

  ngOnInit() {

    let obs = Observable.combineLatest([
      this.route.paramMap, 
      this.route.queryParamMap
    ])
    .switchMap (combined => {
      let userId = combined[0].get('userId');
      let pageNumber = +combined[1].get('page');
      let order = combined[1].get('order')
      console.log(pageNumber+order);

       return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);
  }
  //   this.route.paramMap
  //   .subscribe(params => {
  //     let userId = params.get('userId');
  //   });

  //   this.route.queryParamMap
  //   .subscribe(params => {
  //     let pageNumber = +params.get('page');
  //     let order = params.get('order')
  //     console.log(pageNumber+order);
  //   })

  //   this.service.getAll()
  //     .subscribe(followers => this.followers = followers);
  // }
}
