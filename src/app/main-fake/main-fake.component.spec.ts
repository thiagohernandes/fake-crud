import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFakeComponent } from './main-fake.component';

describe('MainFakeComponent', () => {
  let component: MainFakeComponent;
  let fixture: ComponentFixture<MainFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
