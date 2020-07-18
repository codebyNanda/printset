const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const prefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

//Scripts tasks
//Uglifies
function javascript() {
    return gulp.src('js/**/*.js', { sourcemaps: true })
        .pipe(uglify())
        .pipe(gulp.dest('dist/js', { sourcemaps: true }))
        .pipe(browserSync.stream());
}


//Styles tasks
//Uglifies
function css() {
    return gulp.src('scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            //outputStyle: 'compressed'
        }))
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function watch() {
    css(); 
    javascript();
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', css);
    gulp.watch('./js/**/*.js', javascript);
    gulp.watch('./*html').on('change', browserSync.reload);
}


exports.style = css;
exports.javascript = javascript;
exports.watch = watch;