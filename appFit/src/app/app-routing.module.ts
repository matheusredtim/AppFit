import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'entrar',
    loadChildren: () => import('./entrar/entrar.module').then( m => m.EntrarPageModule)
  },
  {
    path: 'calcular-calorias',
    loadChildren: () => import('./calcular-calorias/calcular-calorias.module').then( m => m.CalcularCaloriasPageModule)
  },
  {
    path: 'calcular-nutrientes',
    loadChildren: () => import('./calcular-nutrientes/calcular-nutrientes.module').then( m => m.CalcularNutrientesPageModule)
  },
  {
    path: 'gerar-treino',
    loadChildren: () => import('./gerar-treino/gerar-treino.module').then( m => m.GerarTreinoPageModule)
  },
  {
    path: 'calcular-taxa-metabolica',
    loadChildren: () => import('./calcular-taxa-metabolica/calcular-taxa-metabolica.module').then( m => m.CalcularTaxaMetabolicaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
