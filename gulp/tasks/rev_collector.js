'use strict';

var gulp      = require('gulp');
var revCollector = require('gulp-rev-collector');

gulp.task('rev_collector', function () {
    return gulp.src(['./src/manifests/**/*.json', './build/**/*.html'])
        .pipe(
          revCollector({
            replaceReved: true
          })
        )
        .pipe( gulp.dest('./build') );
});
