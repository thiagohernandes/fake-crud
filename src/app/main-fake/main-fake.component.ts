import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private fakeService: FakeService) {
    this.getStructureUpdated = this.fakeService.getUpdateStructureFakeFcn().subscribe(
      (fake: Fake) =>{
        this.fakeService.listFakesLoaded.unshift(fake);
      }
    );
  }

  ngOnInit() {
   // this.getListFakes();
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
    return fake ? fake : {id: null, userId: null, title: null, body: null };
  }

}
