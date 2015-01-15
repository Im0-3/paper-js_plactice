var gulp = require('gulp');
var path = require('path');

var mainBowerFiles = require('main-bower-files');

var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

gulp.task('bower', function() {
  var dstGlob = path.join(paths.dstDir, 'lib');
  var successMassage = 'bower completed';
  var errorMassage = 'Error: <%= error.message %>';

  return gulp.src(mainBowerFiles())
    .pipe(plumber({
      errorHandler: notify.onError(errorMassage)
    }))
    .pipe(gulp.dest(dstGlob))
    .pipe(notify(successMassage));
});