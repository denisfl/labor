var gulp    = require('gulp');
var config  = require('../config');
var size    = require('gulp-filesize');
var uglify = require('gulp-uglify');
var browserSync  = require('browser-sync');
var vendor = require('gulp-concat-vendor');


gulp.task('uglifyJs', function() {
  return gulp.src(config.js.src)
    .pipe(vendor('app.js'))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest(config.js.prod))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function() {
  return gulp.src(config.js.src)
    .pipe(vendor('app.js'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts-prod', function() {
  return gulp.src(config.js.src)
    .pipe(vendor('app.js'))
    .pipe(gulp.dest(config.js.prod))
    .pipe(browserSync.reload({stream:true}));
});
