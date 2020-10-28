import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListCategoryComponent} from './list-category/list-category.component';
import {CreateCategoryComponent} from './create-category/create-category.component';


const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent
  },
  {
    path: 'create',
    component: CreateCategoryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
