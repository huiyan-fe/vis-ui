const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const rimraf = require('gulp-rimraf');
const base64 = require('gulp-base64');

const cwd = process.cwd();
const libDir = path.join(cwd, 'lib');

gulp.task('dist', () => {
    return gulp.src(['src/**/*.scss','src/**/*.png','src/**/*.jpg','src/**/*.gif'])
        .pipe(base64()) 
        .pipe(gulp.dest(libDir));
});

gulp.task('compile', ['dist'], () => {
    return gulp.src(['lib/index.scss','lib/**/style/*.scss'])
        .pipe(sass({
            includePaths: ['/lib/'],
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(libDir));
});

gulp.task('rename', ['compile'], () => {
    return gulp.src(['lib/index.scss','lib/index.css'])
        .pipe(rimraf())
        .pipe(rename({
            basename: 'vis-ui'
        }))
        .pipe(gulp.dest(libDir));
});
