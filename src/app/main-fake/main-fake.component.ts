import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake-service/fake.service';
import { Subscription } from 'rxjs';
import { Fake } from '../fake-service/fake';

@Component({
  selector: 'app-main-fake',
  templateUrl: './main-fake.component.html',
  styleUrls: ['./main-fake.component.css']
})
export class MainFakeComponent implements OnInit {

  public errorHttp: any;
  public loading = false;
  public getStructureUpdated: Subscription;
  public persons: any[] = [];
  public personsTemp: any[] = [];

// npm install @angular/material
// npm install @angular/cdk

  constructor(private fakeService: FakeService) {
    this.persons =  Array(50001).fill(1).map((item)  =>  {
      return {
          name: `Name mock mais teste ${Math.random()}`,
          bio: `Bio mock teste`,
          avatar: `Avatar mock mock mock mock mock mock`
        };
      });
    this.personsTemp = this.persons;
    this.getStructureUpdated = this.fakeService.getUpdateStructureFakeFcn().subscribe(
      (fake: Fake) =>{
        this.fakeService.listFakesLoaded.unshift(fake);
      }
    );
  }

  ngOnInit() {
   // this.getListFakes();
  }

  searchScrolling(term: string) {
    if (term) {
      const newList = this.persons.filter(item => item.name.toString().includes(term));
      this.persons = [];
      this.persons = newList;
      console.log(newList.length);
      console.log('executed!');
    } else {
      this.persons = this.personsTemp;
      console.log('initial!');
    }
  }

  getListFakes() {
    this.loading = true;
    if (this.fakeService.listFakesLoaded.length === 0) {
      this.fakeService.allFakes()
                      .subscribe(data => { this.fakeService.listFakesLoaded = data; },
                                 error => this.errorHttp = error,
                                 () =>  this.loading = false);
    } else {
        this.loading = false;
    }
  }

  deleteFake(id: number, index: number) {
    this.fakeService.deleteFake(id)
                    .subscribe(() =>  {delete this.fakeService.listFakesLoaded[index]; },
                               error => this.errorHttp = error);
  }

  handlerFake(fake) {
    return fake ? fake : { id: null, userId: null, title: null, body: null };
  }

}
