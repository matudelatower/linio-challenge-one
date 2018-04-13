import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lco-repositories',
  templateUrl: './lco-repositories.component.html',
  styleUrls: ['./lco-repositories.component.css']
})
export class LcoRepositoriesComponent implements OnInit {

  repositories: any;
  loading: boolean = true;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getRepositories('matudelatower').toPromise().then(
      (data) => {
        this.repositories = data
        this.loading = false
      }
    ).catch((err) => {
      console.error(err);
    });
    ;
  }

}
