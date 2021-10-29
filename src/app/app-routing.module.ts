import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  {path: 'Profile', component: ProfileComponent},
  {path: 'Tournament', component: TournamentComponent},
  {path: 'Leaderboard', component: LeaderboardComponent},
  {path: 'Home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ProfileComponent, TournamentComponent, LeaderboardComponent, HomeComponent]
