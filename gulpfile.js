var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
  scripts: {
    src:'scripts/src/*.js',
    dest:'scripts/dest'
  }
};

gulp.task('default', ['scripts'], function(){
  // console.log("Default task is run!");
  gulp.watch(paths.scripts.src,['scripts']);
});

gulp.task('scripts', function(){
  return gulp.src(paths.scripts.src)
    .pipe(concat('output.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest)); 
});