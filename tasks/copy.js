var gulp = require('gulp');
var path = require('path'); //
var notify = require('gulp-notify'); //デスクトップ通知
var browserSync = require('browser-sync');

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

gulp.task('copy', function(){
  var srcGlob = path.join(paths.srcDir, '*.html');
  var dstGlob = paths.dstDir;
  var successMassage = 'HTML files was Copied!';

  gulp.src(srcGlob)
    .pipe(gulp.dest(dstGlob))
    .pipe(notify(successMassage))
    .pipe(browserSync.reload({stream:true}));
});
