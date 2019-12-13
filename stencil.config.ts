import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  outputTargets: [{
    type: 'www',
    copy: [{ src: "_redirects" }]
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
