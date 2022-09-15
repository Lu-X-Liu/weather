// const { src, dest, watch, series, lastRun } =require('gulp');
// const browserSync = require('browser-sync').create();
import gulp from 'gulp';
const { src, dest, watch, series, lastRun } = gulp;
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import prefix from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

//scss task
function scssTask() {
    return src('src/scss/*.scss', 
        [{sourcemaps: true}, 
         {since: lastRun(scssTask)}])
      .pipe(sass().on('error', sass.logError))
      .pipe(prefix('last 2 versions'))
      .pipe(cleanCss())
      .pipe(dest('dist/css', {sourcemaps: '.'}))
      .pipe(browserSync.stream());
}

//watch task
function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch('index.html').on('change', browserSync.reload);
    watch('./src/scss/**/*.scss', scssTask);
    watch('./**/*.js').on('change', browserSync.reload);
};

// exports
export const dev = series(scssTask, watchTask);

export const w = watchTask;

export default dev;



