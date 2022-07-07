import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import entities, { user } from './typeorm';
import { UserModule } from './user/user.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Adminsql2',
      database: 'testdb',
      entities: entities, // you can also do this entities: [ user ], So you can delete the index.ts
      synchronize: true, // Set to false on production mode
    }),
    CustomersModule,
  ],
})
export class AppModule {}
