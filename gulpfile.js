var gulp = require('gulp');
var sass = require('gulp-sass');

//sass compiler
function style() {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
};
//watching changes in main.scss file
function watch() {
    gulp.watch('./src/sass/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;

//type gulp watch into terminal to start sass compiler