const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const browserify = require('browserify');
const transform = require('vinyl-transform');

gulp.task('html', () => {
    return gulp
        .src(['src/pages/*.html'])
        .pipe(fileinclude({prefix: '@@', basepath: '@file'}))
        .pipe(replace('../img/', './img/'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', () => {
    return gulp
        .src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(replace('../img/', './img/'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('img', () => {
    gulp
        .src(['src/img/**/*'])
        .pipe(gulp.dest('dist/img'));
});

gulp.task('js', () => {
    gulp
        .src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({"presets": ["latest"]}))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
    gulp.watch([
        'src/pages/*.html', 'src/partials/*.html'
    ], ['build']);
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/img/**/*'], ['img']);
    gulp.watch(['src/js/*.js'], ['js']);
})

gulp.task('build', () => {
    gulp.start('html', 'sass', 'img', 'js');
})