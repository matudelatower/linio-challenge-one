import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcoIssuesComponent } from './lco-issues.component';

describe('LcoIssuesComponent', () => {
  let component: LcoIssuesComponent;
  let fixture: ComponentFixture<LcoIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcoIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcoIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
