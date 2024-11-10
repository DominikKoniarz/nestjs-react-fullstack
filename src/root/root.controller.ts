import { Controller, Get } from '@nestjs/common';
import { renderToString } from 'react-dom/server';
import Page from '../view/page';

@Controller('/')
export class RootController {
  @Get()
  getHello(): string {
    const reactHtml = renderToString(Page());

    return `
        <!DOCTYPE html>
        <html>
            <head>
            <title>React SSR</title>
            </head>
            <body>
            <div id="root">${reactHtml}</div>
            </body>
        </html>
        `;
  }
}
