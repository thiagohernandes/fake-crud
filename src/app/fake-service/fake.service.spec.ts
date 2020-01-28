import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FakeService } from './fake.service';

describe('StudentsService', () => {
  let injector: TestBed;
  let service: FakeService;
  let httpMock: HttpTestingController;

  const listFakeMock = [
    { id: 1, userId: 2, title: 'Title 1', body: 'Body 1' },
    { id: 2, userId: 3, title: 'Title 2', body: 'Body 2' },
    { id: 3, userId: 4, title: 'Title 3', body: 'Body 3' },
  ];

  const apiRest = 'https://jsonplaceholder.typicode.com/posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FakeService],
    });

    injector = getTestBed();
    service = injector.get(FakeService);
    httpMock = injector.get(HttpTestingController);
  });

  it('getUserList() should return data', () => {
    service.allFakes().subscribe((res) => {
      expect(res).toEqual(listFakeMock);
    });

    const req = httpMock.expectOne(apiRest);
    expect(req.request.method).toBe('GET');
    req.flush(listFakeMock);
  });

  it('newFake() should return fakeData', () => {
    const objSend = {id: null, userId: 2, title: 'Teste', body: 'Body' };
    const objReturn = {id: 111, userId: 2, title: 'Teste', body: 'Body' };
    service.newFake(objSend).subscribe((res) => {
      expect(res).toEqual(objReturn);
    });

    const req = httpMock.expectOne(apiRest);
    expect(req.request.method).toBe('POST');
    req.flush(objReturn);
  });

  it('updateFake() should return fakeDataUpdated', () => {
    const objSend = {id: 123, userId: 2, title: 'Teste', body: 'Body' };
    const objReturn = {id: 123, userId: 244, title: 'Teste 4444', body: 'Body 4444' };
    service.updateFake(objSend).subscribe((res) => {
      expect(res).toEqual(objReturn);
    });

    const req = httpMock.expectOne(apiRest.concat(`/123`));
    expect(req.request.method).toBe('PUT');
    req.flush(objReturn);
  });

  it('deleteFake() should return void', () => {
    service.deleteFake(123).subscribe();

    const req = httpMock.expectOne(apiRest.concat(`/123`));
    expect(req.request.method).toBe('DELETE');
  });

  afterEach(() => {
    httpMock.verify();
  });

});
