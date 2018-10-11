import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game/game.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
