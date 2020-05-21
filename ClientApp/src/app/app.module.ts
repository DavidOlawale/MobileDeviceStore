import { AuthService } from './Services/Auth.service';
import { OrderItemsService } from './Services/order-items.service';
import { ProductsService } from './Services/products-service.service';
import { ServerService} from './Services/server.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from './shared/shared.module';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { ProductsComponent } from './shared/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CustomerModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    AdminModule
  ],
  providers: [
    ProductsService,
    OrderItemsService,
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
