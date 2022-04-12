import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      host: 'ec2-99-80-170-190.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'uapmbqnuqsfuaj',
      password:
        '3b24f2ee46c04e7d2d37dbe9d4322abe5a99c36c6e42aa4a8e7589e7fb9a7751',
      database: 'd97bef2n0571gv',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
