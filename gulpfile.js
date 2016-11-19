var gulp = require('gulp');
var browserSync = require('browser-sync');
var server = require('gulp-live-server');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

/*gulp.task('server' , function() {
    var live = new server('server.js') ;
    live.start() ;

});*/
gulp.task('serve',  function () {

    browserSync.init({
        notify: false,
        port: 3009,
        server: {
            baseDir: [""],
            routes: {
                '/public/components': 'bower_components'
            }
        }
    });

    gulp.watch(['**'] , ['minify-js'], function() {
      browserSync.reload();
    })
    // gulp.watch(['**'])
    //     .on('change', browserSync.reload);
});

gulp.task('minify-js', function() {
  var sourceFiles = ['./app/js/**/*.js'];
  var filenameRoot = "bundle" ;
  var destinationFolder = "dist";
  return gulp.src(sourceFiles)
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(concat(filenameRoot + '.js'))
  .pipe(gulp.dest(destinationFolder)) // save .js
  .pipe(uglify({ preserveComments: 'license' }))
  .pipe(rename({ extname: '.min.js' }))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest(destinationFolder))
})

gulp.task('test-browser', function () {

    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true ,
        reporters : ['mocha']
    });

});

gulp.task('serve-test', function () {

    browserSync.init({
        notify: false,
        port: 8081,
        server: {
            baseDir: ["test", "app"],
            routes: {
                '/public/components': 'bower_components'
            }
        }
    })


    gulp.watch(['app/**/*.*'])
        .on('change', browserSync.reload);
});
