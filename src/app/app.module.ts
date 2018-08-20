import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { ToastModule } from 'ng2-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PeopleComponent } from './people/people.component';
import { GroupComponent } from './group/group.component';
import { PersonaList } from './models/persona-list.model';
import { PersonaService } from './api/persona.service';
import { UbicacionService } from './api/ubicacion.service';
import { Ubicacion } from './api/DTO/ubicacion.dto';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    ToastModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GroupComponent
  ],
  providers: [ PersonaList, PersonaService, Ubicacion, UbicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
