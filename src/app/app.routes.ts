import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component'),
        // .then((module) => module.ListComponent), Pero se puede omitir ya que el componente tiene export default
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./domains/info/pages/about/about.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import(
            './domains/products/pages/product-detail/product-detail.component'
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
