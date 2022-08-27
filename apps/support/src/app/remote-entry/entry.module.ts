// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// import { RemoteEntryComponent } from './entry.component';
// import { NxWelcomeComponent } from './nx-welcome.component';

// @NgModule({
//   declarations: [RemoteEntryComponent, NxWelcomeComponent],
//   imports: [
//     CommonModule,
//     RouterModule.forChild([
//       {
//         path: '',
//         component: RemoteEntryComponent,
//       },
//     ]),
//   ],
//   providers: [],
// })
// export class RemoteEntryModule {}
//=============================================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import {
  UtilsModule,
  AngularmaterialModule,
} from '@portal/utils';

import { UiModule } from '@portal/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ResizableModule } from 'angular-resizable-element';
import { AngularResizeEventModule } from 'angular-resize-event';

import { SplistcrudService } from '@portal/core';
import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SupporthomeComponent } from './supporthome/supporthome.component';
import { SupportparentComponent } from './supportparent/supportparent.component';
import { SupportformComponent } from './supportform/supportform.component';

//import { createCustomElement } from '@angular/elements';
import { CardtemplettiltedComponent, DropdownAutocompleteComponent, RequestorComponent } from '@portal/ui-components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedDataAccessUserModule } from '@portal/shared/data-access-user';

import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';

//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      RemoteEntryComponent, 
      NxWelcomeComponent, SupporthomeComponent, SupportparentComponent, SupportformComponent
    ],
    imports: [
        CommonModule,
        // BrowserModule,
        // BrowserAnimationsModule,
        AngularmaterialModule,
        UtilsModule,
        UiModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ResizableModule,
        AngularResizeEventModule,        
        FlexLayoutModule,
        RequestorComponent,
        CardtemplettiltedComponent,
        SharedDataAccessUserModule,
        DropdownAutocompleteComponent,
        RequestorComponent,
        JsonSchemaFormModule,
        RouterModule.forChild([
          {
            path: 'supporthome',
            component: SupporthomeComponent
          },
          {
            path: 'request',
            component: SupportparentComponent
          },
          {
            path: 'supporthome',
            //loadChildren: () => import('./entry.module').then(m => m.RemoteEntryModule)
            children: [
              {
                path: 'supporthome',
                component: SupporthomeComponent
              }              
            ]
          },
          {
            path: '',
            component: SupporthomeComponent
          },
        ]),
    ],
    exports: [],
    providers: [SplistcrudService]
})
export class RemoteEntryModule {}

