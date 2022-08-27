import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            loadRemoteModule('login', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'itservicerequest',
          loadChildren: () =>
            loadRemoteModule('itservicerequest', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'support',
          loadChildren: () =>
            loadRemoteModule('support', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'wfdashboard',
          loadChildren: () =>
            loadRemoteModule('wfdashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'itaccessoriesdashboard',
          loadChildren: () =>
            loadRemoteModule('itaccessoriesdashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'colorbankdashboard',
          loadChildren: () =>
            loadRemoteModule('colorbankdashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'sampletestdashboard',
          loadChildren: () =>
            loadRemoteModule('sampletestdashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'workshopproposaldashboard',
          loadChildren: () =>
            loadRemoteModule('workshopproposaldashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'travelrequestdashboard',
          loadChildren: () =>
            loadRemoteModule('travelrequestdashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'stationaryitemsdashboard',
          loadChildren: () =>
            loadRemoteModule('stationaryitemsdashboard', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
