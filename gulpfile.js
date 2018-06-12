const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
// const getBabelCommonConfig = require('./babelrc');

const cwd = process.cwd();
const libDir = path.join(cwd, 'lib/components');
const esDir = path.join(cwd, 'es');

function compile(modules) {
    const sass = gulp.src(['src/components/**/*.scss'])
        .pipe(gulp.dest(modules === false ? esDir : libDir));

    // const js = [];
    // babelify(js, modules);
}

function babelify(js, modules) {
    const babelConfig = getBabelCommonConfig(modules);
    const stream = js.pipe(babel(babelConfig))
        .pipe(gulp.dest(modules === false ? esDir : libDir));
}

gulp.task('test', ['compile-with-es'], () => {
    compile();
});
gulp.task('compile-with-es', () => {
    compile(false);
});

gulp.task('style', () => {
    compile();
});