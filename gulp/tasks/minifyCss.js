'use strict';

var gulp      = require('gulp');
var config    = require('../config');
var sass      = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso      = require('gulp-csso');
// var rev       = require('gulp-rev');
var size      = require('gulp-filesize');
var concatCss = require('gulp-concat-css');
var csscomb   = require('gulp-csscomb');

gulp.task('minifyCss', function() {
  return gulp.src(config.style.src)
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(concatCss(config.style.buildName))
    .pipe(csscomb())
    .pipe(csso())
    // .pipe(rev())
    .pipe(size())
    .pipe(gulp.dest(config.production.cssSrc))
    // .pipe(rev.manifest())
    ;
});
