import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        AppModuleShared
    ]
})
export class AppModule {
}
