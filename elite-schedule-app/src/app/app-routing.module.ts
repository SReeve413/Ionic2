import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyTeamsPage } from './pages/my-teams/my-teams';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'myTeams',
    pathMatch: 'full'
  },
  {
    path: 'myTeams',
    component: MyTeamsPage,
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tournaments',
    loadChildren: () => import('./tournaments/tournaments.module').then( m => m.TournamentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
