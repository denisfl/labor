var gulp = require('gulp');
var config = require('../config').markup;
var browserSync  = require('browser-sync');
var jade = require('gulp-jade');

gulp.task('markup_components', function() {
  return gulp.src(config.srcComponents)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(config.prodComponents))
    .pipe(browserSync.reload({stream:true}));
});
