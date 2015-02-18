var gulp = require('gulp');
var path = require('path');

//require tasks
var requireDir = require('require-dir'); //Gulpfile.jsの分割
var dir = requireDir('./tasks', {recurse: true}); //dir指定

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

//watch
gulp.task('watch', ['sassOptimize', 'coffee', 'copy', 'webpack'],function(){
  var scssWatchGlob = path.join(paths.srcDir, 'scss/*.scss');
  var coffeeWatchGlob = path.join(paths.srcDir, 'coffee/*.coffee');
  var htmlWatchGlob = path.join(paths.srcDir, '*.html');
  gulp.watch(scssWatchGlob, ['sassOptimize']);
  gulp.watch(coffeeWatchGlob, ['coffee']);
  gulp.watch(coffeeWatchGlob, ['webpack']);
  gulp.watch(htmlWatchGlob, ['copy']);
});

gulp.task('default', ['watch', 'browser-sync']);
