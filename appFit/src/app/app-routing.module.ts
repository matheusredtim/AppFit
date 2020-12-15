import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gerar-treino',
    pathMatch: 'full'
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
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'calcular-rmf',
    loadChildren: () => import('./calcular-rmf/calcular-rmf.module').then( m => m.CalcularRmfPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
