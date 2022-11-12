// https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack#custom-webpack-config-object
// https://github.com/shellscape/webpack-manifest-plugin

import { Configuration } from 'webpack';
import { Manifest, WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { AppRoutes } from './src/app/app.routes';

console.log(AppRoutes[0]?.loadChildren?.toString())

export default {
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      generate(seed, files, entries) {
        console.log({seed, files, entries})
        let manifest: Manifest = {};
        Object.keys(entries).map((property) => {
          manifest[property] = entries[property].filter(
            (x) => x.endsWith('.js') || x.endsWith('.css')
          );
        });
        return manifest;
      },
    }),
  ],
} as Configuration;
