var gulp = require('gulp');
var path = require('path');

var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

//sass
var csscomb = require('gulp-csscomb'); //cssComb
var sass = require('gulp-ruby-sass'); //Sassコンパイル
var plumber = require('gulp-plumber'); //エラー時のタスク強制終了の防止
var notify = require('gulp-notify'); //デスクトップ通知
var cache = require('gulp-cached'); //キャッシュ

//optimize
var autoprefixer = require('gulp-autoprefixer');
var pixrem = require('gulp-pixrem');
var rename = require('gulp-rename');

//option
var paths = {
  srcDir: './src',
  dstDir: './prod'
};

gulp.task('sass', function(){
  var combGlob = path.join(paths.srcDir, 'scss');
  var srcGlob = path.join(paths.srcDir, 'scss/*.scss');
  var dstGlob = path.join(paths.dstDir, 'css');
  var errorMassage = 'Error: <%= error.message %>';
  var sassOptions = {
    style : 'expanded'
  };

  return gulp.src( srcGlob )
    .pipe(cache('sass'))
    .pipe(plumber({
      errorHandler: notify.onError(errorMassage)
    }))
    .pipe(csscomb())
    .pipe(gulp.dest(combGlob))
    .pipe(sass(sassOptions))
    .pipe(gulp.dest(dstGlob));
});

gulp.task('optimize', function(){
  var srcGlob = path.join(paths.dstDir, 'css/*.css');
  var dstGlob = path.join(paths.dstDir, 'css');
  var errorMassage = 'Error: <%= error.message %>';
  var successMassage = 'Scss files was Compiled!';
  var autoprefixerOptions = {
    browsers: ['last 2 versions'],
    cascade: false
  };

  return gulp.src([srcGlob, '!./prod/css/*min.css'])
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie >= 8', 'Android 2.3'],
        cascade: false
    }))
    .pipe(pixrem('10px')) //root font size = 62.5%;
    .pipe(gulp.dest(dstGlob))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(dstGlob))
    .pipe(notify(successMassage))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('sassOptimize', function() {
  runSequence('sass', 'optimize');
});