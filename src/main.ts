import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server =express();
 export const handler = async(req:any,res:any)=>{
  const app =await NestFactory.create(AppModule,new ExpressAdapter(server));
  app.setGlobalPrefix('api');
  server(req,res);
 };