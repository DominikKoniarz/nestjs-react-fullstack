import { Controller, Get } from '@nestjs/common';
import {
  //   renderToStaticMarkup, // hydration does not work with this
  renderToString,
} from 'react-dom/server';
import Root from '../view/pages/root';
import { createElement } from 'react';

@Controller('/')
export class RootController {
  @Get()
  getHello() {
    const date = new Date();

    const props = {
      renderDateIso: date.toISOString(),
    };

    const reactHtml = renderToString(createElement(Root, props));

    return `
        <!DOCTYPE html>
        <html>
            <head>
            <title>React SSR</title>
            <script src="/public/runtime.bundle.js" defer></script>
            <script src="/public/root.bundle.js" defer></script>
            </head>
            <body>
            <div id="root">${reactHtml}</div>
            </body>
            <script>
            window.__INITIAL_PROPS__ = ${JSON.stringify(props)};
            </script>
        </html>
        `;
  }
}
