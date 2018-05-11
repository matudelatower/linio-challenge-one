import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lco-issues',
  templateUrl: './lco-issues.component.html',
  styleUrls: ['./lco-issues.component.scss']
})
export class LcoIssuesComponent implements OnInit {

  title: string;
  noIssueText: string;
  loading: boolean = false;
  issues: any[] = [];
  user: string;

  constructor(public api: ApiService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    this.title = this.route.snapshot.paramMap.get('repo');
    this.loading = true;
    this.issues = [];
    this.user = this.route.snapshot.paramMap.get('username');

    return this.api.getIssues(this.user, this.route.snapshot.paramMap.get('repo')).toPromise()
      .then(
        (data) => {

          if (data.length == 0) {
            this.noIssueText = 'Repo without open issues'
          } else {
            this.issues = data
          }

          this.loading = false
        }
      ).catch((error) => {
        this.loading = false;
        this.issues = [];
        this.noIssueText = '';

      });

  }

}
