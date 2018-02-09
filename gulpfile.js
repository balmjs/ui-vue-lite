var balm = require('balm');
var balmConfig = require('./config/balmrc');
var env = require('./config/env');
var constants = require('./config/constants');
var individual = require('./config/individual');

balm.config = balmConfig;

balm.go(function(mix) {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
  } else {
    if (env.updateMDL) {
      // clear
      mix.remove([
        constants.DEV_SOURCE.mdl + '/*',
        constants.DEV_SOURCE.img + '/*',
        constants.DEV_SOURCE.font + '/*'
      ]);

      // get material design lite
      mix.copy(
        constants.DML_SOURCE +
          '/src/{_*scss,material-design-lite.scss,mdlComponentHandler.js}',
        constants.DEV_SOURCE.mdl
      );
      mix.copy(
        constants.DML_SOURCE + '/src/**/{_*.scss,*.js}',
        constants.DEV_SOURCE.mdl
      );

      // get material design lite images
      mix.copy(
        constants.DML_SOURCE + '/src/images/*.svg',
        constants.DEV_SOURCE.img
      );

      // get material design icons
      mix.copy(
        constants.DMI_SOURCE + '/iconfont/*.{css,eot,svg,ttf,woff,woff2}',
        constants.DEV_SOURCE.font
      );
    } else {
      if (balm.config.production) {
        mix.remove('./dist/font/*.css');

        // clear individual
        mix.remove([
          individual.output.components,
          individual.output.helpers,
          individual.output.plugins,
          individual.output.directives
        ]);

        // build individual
        const individualBuild = ['components', 'helpers', 'plugins']; // , 'directives'
        individualBuild.forEach(buildName => {
          let buildFiles = individual[buildName].map(item => {
            return individual.input[buildName] + '/' + item;
          });
          mix.js(buildFiles, individual.output[buildName]);
        });

        mix.copy(['./dist/css/*.css', './dist/js/*.js'], './dist');
        mix.copy('./dist/css/components/*', './components');
        mix.copy('./dist/css/plugins/*', './plugins');
        mix.copy('./dist/font/*', './font');
        mix.copy('./dist/img/*', './img');
        mix.remove(['./dist/css', './dist/js', './dist/img', './dist/font']);
      }
    }
  }
});
