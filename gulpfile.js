var gulp = require('gulp');
var browserSync = require('browser-sync');
var server = require('gulp-live-server');

gulp.task('server' , function() {
    var live = new server('server.js') ;
    live.start() ;

});
gulp.task('serve',  function () {

    browserSync.init({
        notify: false,
        port: 9000,
        server: {
            baseDir: [""],
            routes: {
                '/public/components': 'bower_components'
            }
        }
    });


    gulp.watch(['**'])
        .on('change', browserSync.reload);
});

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