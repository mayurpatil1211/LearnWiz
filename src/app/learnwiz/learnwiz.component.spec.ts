import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnwizComponent } from './learnwiz.component';

describe('LearnwizComponent', () => {
  let component: LearnwizComponent;
  let fixture: ComponentFixture<LearnwizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnwizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnwizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
