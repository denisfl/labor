var gulp = require('gulp');
var config = require('../config').markup;
var browserSync  = require('browser-sync');
var jade = require('gulp-jade');
var jadeGlobbing  = require('gulp-jade-globbing');


gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(jadeGlobbing({
      placeholder: {
        'components': './src/components/**/*.jade',
        'states': './src/states/**/*.jade',
        'layout': './src/layout/**/*',
        'default-template': './src/layout/default.jade',
      }
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('markup-prod', function() {
  return gulp.src(config.srcProd)
    .pipe(jadeGlobbing({
      placeholder: {
        'components': './src/components/**/*.jade',
        'states': './src/states/**/*.jade',
        'layout': './src/layout/**/*',
        'default-template': './src/layout/default.jade',
      }
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.prod))
    .pipe(browserSync.reload({stream:true}));
});
