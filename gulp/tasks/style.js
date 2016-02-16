'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config       = require('../config');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var csscomb = require('gulp-csscomb');

gulp.task('style', ['clean'], function () {
  return gulp.src(config.style.src)
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(concatCss(config.style.buildName))
    .pipe(csscomb())
    .pipe(gulp.dest(config.style.dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('style-prod', ['clean'], function () {
  return gulp.src(config.style.src)
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(concatCss(config.style.buildName))
    .pipe(csscomb())
    .pipe(gulp.dest(config.style.prod))
    .pipe(browserSync.reload({stream:true}));
});
