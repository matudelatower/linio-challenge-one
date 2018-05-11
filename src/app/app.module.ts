import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LcoRepositoriesComponent } from './lco-repositories/lco-repositories.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LcoIssuesComponent } from './lco-issues/lco-issues.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LcoRepositoriesComponent },
  { path: 'home/:username', component: LcoRepositoriesComponent },
  { path: 'issues/:username/:repo', component: LcoIssuesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LcoRepositoriesComponent,
    LcoIssuesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
