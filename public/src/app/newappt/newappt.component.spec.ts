import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewapptComponent } from './newappt.component';

describe('NewapptComponent', () => {
  let component: NewapptComponent;
  let fixture: ComponentFixture<NewapptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewapptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewapptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
