var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var cp = require('child_process');
var tsb = require('gulp-tsb');

// run mocha tests in the ./tests folder
gulp.task('test', function () {
    return gulp.src('./tests/out/test*.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it 
        .pipe(mocha());
});

// run browser-sync on for client changes https://didesweb.com/gulp/automatiza-tu-workflow-con-browser-sync/#:~:text=Lo%20hace%20mediante%20la%20sincronizaci%C3%B3n,con%20un%20puerto%20en%20particular.
//gulp.task('browser-sync', ['nodemon', 'watch'], function () {

gulp.task('browser-sync-fun', function () {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["out/**/*.*", "out/routes/**/*.*", "out/public/**/*.*", "out/views/**/*.*"],
        port: 7000,
    });
});


// run nodemon on server file changes
gulp.task('nodemon', function (cb) {
    var started = false;

    return nodemon({
        script: 'out/www.js',
        watch: ['out/*.js']
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    }).on('restart', function onRestart() {
        setTimeout(function reload() {
            browserSync.reload({
                stream: false
            });
        }, 500);  // browserSync reload delay
    });
});

// TypeScript build for /src folder 
var tsConfigSrc = tsb.create('src/tsconfig.json');
gulp.task('build', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(tsConfigSrc()) 
        .pipe(gulp.dest('./out'));
});


gulp.task('public', function () {
    return gulp.src('./src/public/**/*')
        .pipe(gulp.dest('./out/public'));
});


// watch for any TypeScript or LESS file changes
// if a file change is detected, run the TypeScript or LESS compile gulp tasks
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['build']);
}); 


gulp.task('browser-sync', gulp.series('nodemon', 'watch', 'browser-sync-fun'));
gulp.task('buildAll', gulp.series('build', 'public'));
gulp.task('default', gulp.series('browser-sync'));
