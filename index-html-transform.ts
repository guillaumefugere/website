// https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack#index-transform

import { TargetOptions } from '@angular-builders/custom-webpack';

export default (targetOptions: TargetOptions, indexHtml: string) => {
  console.log({ targetOptions, indexHtml });
  return indexHtml;
};
