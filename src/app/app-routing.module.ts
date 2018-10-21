import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/app/game',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'game',
        component: GameComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
})
export class AppRoutingModule {
}
