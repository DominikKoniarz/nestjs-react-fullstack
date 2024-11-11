import { Controller, Get, Res } from '@nestjs/common';
import { renderToPipeableStream } from 'react-dom/server';
import Root from '../view/pages/root';
import { createElement } from 'react';
import { Response } from 'express';
import Base from 'src/view/Base';

@Controller('/')
export class RootController {
  @Get()
  async getHello(@Res() res: Response) {
    const date = new Date();

    const props = {
      randomCount: Math.floor(Math.random() * 10),
      renderDateIso: date.toISOString(),
    };

    const { pipe } = renderToPipeableStream(
      Base({ children: createElement(Root, props) }),
      {
        bootstrapScripts: ['/public/runtime.bundle.js'],
        bootstrapScriptContent:
          'window.__INITIAL_PROPS__ = ' + JSON.stringify(props),
        onShellReady() {
          res.setHeader('content-type', 'text/html');
          pipe(res);
        },
      },
    );
  }
}
