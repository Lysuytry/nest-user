import {Module} from '@nestjs/common';
import {UserModule} from './users/user.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { CategoryModule } from './category/category.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [UserModule, ProductModule, SaleModule, CategoryModule, AlertModule, UserModule]
})
export class APIModule {}
