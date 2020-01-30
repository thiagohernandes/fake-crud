import { DetailFakeComponent } from './detail-fake.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';

describe('DetailFakeComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailFakeComponent
      ],
      imports: [RouterModule,
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
            ],
      providers: [FormBuilder]
    }).compileComponents();
  }));

  it('should create the DetailFakeComponent', () => {
    const fixture = TestBed.createComponent(DetailFakeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call saveFake', () => {
    const fixture = TestBed.createComponent(DetailFakeComponent);
    const app = fixture.componentInstance;

    const formBuilder: FormBuilder = new FormBuilder();
    app.form = formBuilder.group({
      id: [null, []],
      userid: [null, Validators.required],
      title: [null, Validators.required],
      body: [null, Validators.required],
    });

    app.form.controls[`id`].setValue(1);
    app.form.controls[`userid`].setValue(2);
    app.form.controls[`title`].setValue('Test');
    app.form.controls[`body`].setValue('Test body');

    const spyMethod = spyOn(app, 'saveFake').and.callThrough();
    app.saveFake();
    expect(spyMethod).toHaveBeenCalled();
  });

});
