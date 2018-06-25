const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');

const cwd = process.cwd();
const libDir = path.join(cwd, 'lib');

function compile(modules) {
    const scss = gulp.src(['src/**/*.scss'])
        // .pipe(sass())
        .pipe(gulp.dest(libDir));
}

gulp.task('compile', () => {
    compile();
});
