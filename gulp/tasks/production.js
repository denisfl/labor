'use strict';

var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', function(){
  // gulp.start(['markup', 'markup_components', 'images', 'minifyCss', 'rev_collector', 'uglifyJs', 'clean'])
  gulp.start(['markup-prod', 'markup_components', 'style-prod', 'images-prod', 'scripts-prod', 'clean'])
});
