import { TestBed, async } from '@angular/core/testing';
import { MainFakeComponent } from './main-fake.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('MainFakeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainFakeComponent
      ],
      imports: [RouterModule,
                RouterTestingModule,
                HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should create the MainFakeComponent', () => {
    const fixture = TestBed.createComponent(MainFakeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call getListFakes', () => {
    const fixture = TestBed.createComponent(MainFakeComponent);
    const app = fixture.debugElement.componentInstance;
    const spyMethod = spyOn(app, 'getListFakes').and.callThrough();
    app.getListFakes();
    expect(spyMethod).toHaveBeenCalled();
  });

  it('should call deleteFake', () => {
    const fixture = TestBed.createComponent(MainFakeComponent);
    const app = fixture.debugElement.componentInstance;
    const spyMethod = spyOn(app, 'deleteFake').and.callThrough();
    app.deleteFake(1, 2);
    expect(spyMethod).toHaveBeenCalled();
  });

  it('should call handlerFake', () => {
    const fixture = TestBed.createComponent(MainFakeComponent);
    const app = fixture.debugElement.componentInstance;
    const objReturn = {id: 1, userId: 2, title: 'Teste', body: 'Body' };
    expect(app.handlerFake(objReturn)).toEqual(objReturn);
  });

});
