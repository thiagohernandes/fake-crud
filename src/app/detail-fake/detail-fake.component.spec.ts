import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFakeComponent } from './detail-fake.component';

describe('DetailFakeComponent', () => {
  let component: DetailFakeComponent;
  let fixture: ComponentFixture<DetailFakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
