const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');

const cwd = process.cwd();
const libDir = path.join(cwd, 'lib');

function compile(modules) {
    const scss = gulp.src(['src/index.scss'])
        .pipe(sass({includePaths: ['/src/']}))
        .pipe(gulp.dest(libDir));
}

function build(modules) {
    const scss = gulp.src(['src/**/*.scss'])
        .pipe(gulp.dest(libDir));
}

gulp.task('compile', () => {
    build();
    compile();
});
