import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AccessControlModule } from 'nest-access-control';
import { join } from 'path';
import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { roles } from './app.roles';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommodityCategoryModule } from './commodity-category/commodity-category.module';
import { CommonModule } from './common/common.module';
import { GameVersionModule } from './game-version/game-version.module';
import { ItemPriceModule } from './item-price/item-price.module';
import { FallbackItemModule } from './item/fallback-item/fallback-item.module';
import { ItemModule } from './item/item.module';
import { ShipModule } from './item/ship/ship.module';
import { LocationTypeModule } from './location-type/location-type.module';
import { LocationModule } from './location/location.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { OrganizationMemberModule } from './organization-member/organization-member.module';
import { OrganizationModule } from './organization/organization.module';
import { PossessionModule } from './possession/possession.module';
import { TradeModule } from './trade/trade.module';
import { TransactionDetailModule } from './transaction-detail/transaction-detail.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    CommonModule,
    AccountModule,
    AuthModule,
    OrganizationModule,
    OrganizationMemberModule,
    AccessControlModule.forRoles(roles),
    CommodityCategoryModule,
    GameVersionModule,
    ItemModule,
    LocationTypeModule,
    LocationModule,
    ItemPriceModule,
    TransactionDetailModule,
    TransactionModule,
    PossessionModule,
    ManufacturerModule,
    ShipModule,
    FallbackItemModule,
    TradeModule,
    GraphQLModule.forRoot({
      debug: false,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), './graphql.schema.ts'),
        outputAs: 'interface'
      },
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req })
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
