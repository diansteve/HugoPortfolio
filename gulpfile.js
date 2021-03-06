var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify')

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
})

//script paths
var jsFiles = 'src/js/*.js',
    jsDest = 'static/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
})

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public'));
});

// Set watch as default task
gulp.task("default", ["watch"])