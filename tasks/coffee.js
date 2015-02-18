var gulp = require('gulp');
var path = require('path');

var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var cache = require('gulp-cached');
var webpack  = require('gulp-webpack');
var rename = require('gulp-rename');

//gulp plugin
var browserSync = require('browser-sync');

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

gulp.task('coffee', function(){
  var srcGlob = path.join(paths.srcDir, 'coffee/*.coffee');
  var dstGlob = path.join(paths.dstDir, 'js');
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'coffee file was compiled';

  return gulp.src( srcGlob )
    .pipe(cache('coffee'))
    .pipe(plumber({
      errorHandler: notify.onError(errorMassage)
    }))
    .pipe(webpack({
      devtool: '#source-map',
      output: {
        filename: "bundle.js"
      },
      module: {
        loaders: [
          { test: /\.coffee$/, loader: 'coffee-loader' },
        ],
      }
    }))
    .pipe(gulp.dest(dstGlob))
    .pipe(notify(successMassage))
    .pipe(browserSync.reload({stream:true}));
});