import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareListComponent } from './prepare-list.component';

describe('PrepareListComponent', () => {
  let component: PrepareListComponent;
  let fixture: ComponentFixture<PrepareListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepareListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
