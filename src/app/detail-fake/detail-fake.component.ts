import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FakeService } from '../fake-service/fake.service';
import { Fake } from '../fake-service/fake';

@Component({
  selector: 'app-detail-fake',
  templateUrl: './detail-fake.component.html',
  styleUrls: ['./detail-fake.component.css']
})
export class DetailFakeComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;
  success = false;
  id = null;
  fakeEditing: Fake = { id: null, userId: null, title: null, body: null };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private fakeService: FakeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.submitted = false;
    this.form = this.formBuilder.group({
      id: [null, []],
      userid: [null, Validators.required],
      title: [null, Validators.required],
      body: [null, Validators.required],
    });
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.fakeService.listFakesLoaded.forEach(fake => {
          if (fake.id === Number(this.id)) {
            this.fakeEditing.id = fake.id;
            this.fakeEditing.title = fake.title;
            this.fakeEditing.body = fake.body;
            this.fakeEditing.userId = fake.userId;
          }
        });
        this.form.controls[`id`].setValue(Number(this.id));
        this.form.controls[`userid`].setValue(this.fakeEditing.userId);
        this.form.controls[`title`].setValue(this.fakeEditing.title);
        this.form.controls[`body`].setValue(this.fakeEditing.body);
      }
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.saveFake();
  }

  saveFake() {
    const fakeTemp = this.fakeService.mountFake(this.form);
    if (this.id) {
      this.fakeService.updateFake(fakeTemp).subscribe(() => this.success = true,
      error => console.log(error));
    } else {
      this.fakeService.newFake(fakeTemp).subscribe(() => {
        this.success = true;
        },
      error => console.log(error));
    }
  }

  returnMain() {
    this.router.navigate(['/main']);
  }

}
