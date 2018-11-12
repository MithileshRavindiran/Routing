import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService , private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
    .subscribe(params => {
      let userId = params.get('userId');
    });

    this.route.queryParamMap
    .subscribe(params => {
      let pageNumber = +params.get('page');
      let order = params.get('order')
      console.log(pageNumber+order);
    })

    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
