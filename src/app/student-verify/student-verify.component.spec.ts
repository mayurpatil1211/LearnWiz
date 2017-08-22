import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVerifyComponent } from './student-verify.component';

describe('StudentVerifyComponent', () => {
  let component: StudentVerifyComponent;
  let fixture: ComponentFixture<StudentVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
