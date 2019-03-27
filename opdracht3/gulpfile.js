'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();



gulp.task('start', function () {
    console.log('H3T I5 GELUKT!!!');
    return gulp.src('dev/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dev/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function () {
    gulp.watch('dev/scss/**/*.scss', ['start']);

});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'dev'
        },
    })
})


gulp.task('default', ['start', 'watch', 'browserSync']);
