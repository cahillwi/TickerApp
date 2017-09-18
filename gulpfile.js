var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

var jsFiles = ['*.js', 'src/**/*.js'];
gulp.task('style', function(){
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 4000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting...')
    })
});
