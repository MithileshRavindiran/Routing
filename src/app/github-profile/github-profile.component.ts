import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.route.snapshot.paramMap.get('userId');
    this.route.paramMap
    .subscribe(params => {
      let userId = +params.get('userId');
      console.log(userId);
    })
  }

  submit() {
    this.router.navigate(['/followers'], {queryParams : {page : 1, order: 'newest'}})
  }

}
