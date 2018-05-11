import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-lco-repositories',
  templateUrl: './lco-repositories.component.html',
  styleUrls: ['./lco-repositories.component.scss']
})
export class LcoRepositoriesComponent implements OnInit {

  repositories: any[] = [];
  user: string;
  noRepoText: string;
  loading: boolean = false;

  constructor(public api: ApiService, public snackBar: MatSnackBar,
    private route: ActivatedRoute) {

  }

  search() {
    if (this.user == '' || isUndefined(this.user)) {
      this.snackBar.open('user input cannot be null', null, {
        duration: 2000,
      })
      return;
    } else {

      this.loading = true;
      this.repositories = [];

      this.api.getRepositories(this.user).toPromise().then(
        (data) => {

          if (data.length == 0) {
            this.noRepoText = 'User without repositories'
          } else {
            this.repositories = data
          }

          this.loading = false
        }
      ).catch((error) => {
        this.loading = false;
        this.repositories = [];
        this.noRepoText = '';
        this.snackBar.open(error.error.message, null, {
          duration: 2000,
        })
      });

    }
  }


  ngOnInit() {
    let routeParam = this.route.snapshot.paramMap.get('username')
    if (routeParam) {
      this.user = routeParam;
      this.search();
    }

  }

}