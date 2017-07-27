const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const sass = require('gulp-sass');
const assetpaths = require('gulp-assetpaths');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('html', () => {
    return gulp
        .src(['src/pages/*.html'])
        .pipe(fileinclude({prefix: '@@', basepath: '@file'}))
        .pipe(assetpaths({
            newDomain: '.',
            oldDomain: '..',
            docRoot: 'public_html',
            filetypes: [
                'jpg',
                'jpeg',
                'png',
                'ico',
                'gif',
                'js',
                'css',
                'svg'
            ],
            customAttributes: ['data-custom'],
            templates: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', () => {
    return gulp
        .src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(assetpaths({
            newDomain: '.',
            oldDomain: '..',
            docRoot: 'public_html',
            filetypes: [
                'jpg',
                'jpeg',
                'png',
                'ico',
                'gif',
                'js',
                'css'
            ],
            customAttributes: ['data-custom'],
            templates: true
        }))
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
    ], ['html']);
    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/img/**/*'], ['img']);
    gulp.watch(['src/js/*.js'], ['js']);
})

gulp.task('build', () => {
    gulp.start('html', 'sass', 'img', 'js');
})