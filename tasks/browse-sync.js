var gulp = require('gulp');
var path = require('path');

var browserSync = require('browser-sync');

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: paths.dstDir
    },
    ghostMode: {
      location: true
    }
  });
});