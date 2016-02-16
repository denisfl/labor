var dest = "./dev";
var prod = "./build";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest,
    },
    open: false,
    reloadOnRestart: false
  },


  autoprefixer: {
    browsers: ['last 2 version']
  },

  style: {
    src: [
      src + '/assets/stylesheets/**/*.scss',
      src + '/components/**/*.scss'
    ],
    dest: dest + '/assets/stylesheets/',
    prod: prod + '/assets/stylesheets/',
    buildName: 'app.css',
    settings: {
      style: 'expanded',
    }
  },

  images: {
    src: src + '/assets/images/**',
    dest: dest + '/assets/images',
    prod: prod + '/assets/images'
  },

  markup: {
    layout: src + '/layout/layout.jade',
    src: [
      src + '/components/**/*.jade',
      src + '/states/**/*.jade'
    ],
    srcProd: [
      src + '/states/**/*.jade'
    ],
    dest: dest,
    prod: prod,

    // for build components
    srcComponents: src + '/components/**/*.jade',
    prodComponents: prod + '/components/'
  },

  js: {
    src: [
      src + '/assets/javascript/**/*.js',
      src + '/components/**/*.js',
    ],
    dest: dest + '/assets/javascript/',
    prod: prod + '/assets/javascript/'
  },

  production: {
    cssSrc: dest + '/assets/stylesheets/',
    jsSrc: dest + '/assets/javascript/',
    dest: dest
  }
};
