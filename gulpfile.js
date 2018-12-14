const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const tinypng = require('gulp-tinypng');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

/*
-- TOP LEVEL FUNCTIONS
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Points to folder to output
gulp.watch - Watch files and folder for changes
*/

// Logs message
gulp.task('message', function(){
    return console.log('Gulp is running...');
});

// Copy all html files
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// imagemin Optimize images
gulp.task('imagemin', function(){
    gulp.src('src/images/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

//tinypng Optimize images
gulp.task('tinypng', function(){
    gulp.src(['src/images/*.jpg', 'src/images/*.png'])
    .pipe(tinypng('sgvFppdx77Q4PHZFMptPNsKjrF2ywQpK'))
    .pipe(gulp.dest('dist/images'));
    
});

//JS contcatination and minification
gulp.task('js', function(){
    gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
});

// Default task for gulp - Runs by typing gulp in cmd
gulp.task('message', function(){
    return console.log('Gulp is running...');
});