// const { src, dest, watch, series, lastRun } =require('gulp');
// const browserSync = require('browser-sync').create();
import gulp from 'gulp';
import browserSync from 'browser-sync';

function watchTask() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('index.html').on('change', browserSync.reload);
    gulp.watch('style.css').on('change', browserSync.reload);
    gulp.watch('./**/*.index.js').on('change', browserSync.reload);
};

// exports.w = watchTask;
export const w = watchTask;