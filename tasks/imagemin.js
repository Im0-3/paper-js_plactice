var gulp = require('gulp');
var path = require('path'); //
var notify = require('gulp-notify'); //デスクトップ通知
var imagemin = require('gulp-imagemin'); //imgの軽量化
var changed  = require('gulp-changed');  //変更を確認

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

//imagemin
gulp.task( 'imagemin', function(){
  var srcGlob = path.join(paths.srcDir, '**/*.+(jpg|jpeg|png|gif|svg)');
  var dstGlob = paths.dstDir;
  var imageminOptions = {
    optimizationLevel: 7
  };

  gulp.src( srcGlob )
    .pipe(changed( dstGlob ))
    .pipe(imagemin( imageminOptions ))
    .pipe(gulp.dest( dstGlob ));
});