import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcoRepositoriesComponent } from './lco-repositories.component';

describe('LcoRepositoriesComponent', () => {
  let component: LcoRepositoriesComponent;
  let fixture: ComponentFixture<LcoRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcoRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcoRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
