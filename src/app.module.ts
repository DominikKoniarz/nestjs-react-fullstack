import { Module } from '@nestjs/common';
import { RootModule } from './root/root.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
    RootModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
