/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com  on 3/12/2015.
 */

// --------- VARIABLES
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),

    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

    server = require('gulp-server-livereload');

// --------- SERVER
gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: true,
            directoryListing: false,
        }));
});

// --------- BUILDER
gulp.task('compile-js', function () {
    gulp.src(['!app/**/*test.js','!app/dist/*.js','app/**/*.module.js','app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/assets/js/'))
        .pipe(uglify())
        .pipe(notify({ message: 'JS are compiled' }));
});

gulp.task('compile-scss', function() {
    return gulp.src('app/assets/scss/main.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        //.pipe(rename({suffix: '.min'}))
        //.pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css/'))
        .pipe(notify({ message: 'compile-scss task complete' }));
});

gulp.task('compile-html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(notify({ message: 'All html are in place' }));
});

// --------- IMAGE
gulp.task('compress-images', function() {
    return gulp.src('app/asset/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/asset/images'))
        .pipe(notify({ message: 'Images are compressed' }));
});


// --------- WATCHER
gulp.task('watch', function() {


    gulp.watch('app/**/*.scss', ['compile-scss']);

    gulp.watch('app/**/*.js', ['compile-js']);

   // gulp.watch('app/**/*.html', ['compile-html']);

    gulp.watch('app/assets/images/**/*', ['compress-images']);


});

// --------- CLEAN
gulp.task('clean', function(cb) {
    del(['app/assets/css', 'app/assets/js', 'app/assets/images'], cb)
});

// --------- DEFAULT
gulp.task('default', ['clean'], function() {
    gulp.start('compile-scss', 'compile-js', 'compile-html','compress-images','watch','webserver')

});