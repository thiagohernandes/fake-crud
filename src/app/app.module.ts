import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainFakeComponent } from './main-fake/main-fake.component';
import { DetailFakeComponent } from './detail-fake/detail-fake.component';
import { AppRoutes } from './app.routes';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FakeService } from './fake-service/fake.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainFakeComponent,
    DetailFakeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutes,
    RouterModule,
  ],
  providers: [
    FakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
