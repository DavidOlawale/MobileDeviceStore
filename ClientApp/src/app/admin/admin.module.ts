import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminProductsComponent } from "./admin-products/admin-products.component";
import { AdminProductDetailsComponent } from "./admin-product-details/admin-product-details.component";
import { RouterModule, Route } from "@angular/router";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { FormsModule } from "@angular/forms";
import { NewProductComponent } from "./new-product/new-product.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToastyModule } from "ng2-toasty";
import { AdminOrdersComponent } from "./admin-orders/admin-orders.component";
import { AdminOrderDetailsComponent } from './admin-order-details/admin-order-details.component';

const routes: Route[] = [
  { path: "products/:id/edit", component: EditProductComponent },
  { path: "orders", component: AdminOrdersComponent },
  { path: "orders/:id", component: AdminOrderDetailsComponent }
];

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminProductDetailsComponent,
    EditProductComponent,
    NewProductComponent,
    NewProductComponent,
    AdminOrdersComponent,
    AdminOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FontAwesomeModule,
    ToastyModule.forRoot()
  ],
  exports: [
    AdminProductsComponent,
    AdminProductDetailsComponent,
    EditProductComponent,
    RouterModule
  ]
})
export class AdminModule {}
