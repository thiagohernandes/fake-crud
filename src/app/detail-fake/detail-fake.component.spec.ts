import { TestBed, async } from '@angular/core/testing';
import { DetailFakeComponent } from './detail-fake.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DetailFakeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailFakeComponent
      ],
      imports: [RouterModule,
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
            ]
    }).compileComponents();
  }));

  it('should create the MainFakeComponent', () => {
    const fixture = TestBed.createComponent(DetailFakeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call saveFake', () => {
    const fixture = TestBed.createComponent(DetailFakeComponent);
    const app = fixture.debugElement.componentInstance;
    const spyMethod = spyOn(app, 'saveFake').and.callThrough();
    app.saveFake();
    expect(spyMethod).toHaveBeenCalled();
  });

});
