import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTeachComponent } from './teacher-teach.component';

describe('TeacherTeachComponent', () => {
  let component: TeacherTeachComponent;
  let fixture: ComponentFixture<TeacherTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
