import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Fake } from './fake';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {headers: new HttpHeaders({'Content-Type':  'application/json; charset=UTF-8'})};

@Injectable({
  providedIn: 'root'
})

export class FakeService {

  public listFakesLoaded: Fake[] = [];

  constructor(private http: HttpClient) { }

  allFakes(): Observable<Fake[]> {
    const url = `${API_URL}`;
    return this.http.get<Fake[]>(url);
  }

  newFake(fake: Fake): Observable<Fake> {
    console.log(`Sucesso ao criar fake`);
    fake.id = this.listFakesLoaded.length + 1;
    this.listFakesLoaded.unshift(fake);
    return this.http.post<Fake>(API_URL, fake, HTTP_OPTIONS);
  }

  updateFake(fake: Fake): Observable<Fake> {
    console.log(`Sucesso ao atualizar fake`);
    this.listFakesLoaded.forEach(fakeLoaded => {
      if (fakeLoaded.id === fake.id) {
        fakeLoaded.body = fake.body;
        fakeLoaded.title = fake.title;
        fakeLoaded.userId = fake.userId;
      }
    });
    return this.http.put<Fake>(API_URL.concat(`/${fake.id}`), fake, HTTP_OPTIONS);
  }

  deleteFake(id: number): Observable<void> {
    console.log(`Sucesso ao excluir fake`);
    return this.http.delete<void>(API_URL.concat(`/${id}`));
  }

  mountFake(form: FormGroup) {
    return {id: form.controls[`id`].value, userId: form.controls[`userid`].value,
            title: form.controls[`title`].value, body: form.controls[`body`].value };
  }

}
