const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', function () {
    gulp
        .src('src/index.html')
        .pipe(fileinclude({prefix: '@@', basepath: '@file'}))
        .pipe(gulp.dest('./build/'));
});