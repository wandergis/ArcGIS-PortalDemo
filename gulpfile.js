var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
gulp.task('compress', function() {
	gulp.src(['./js/**/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./compressjs'));
})
gulp.task('clean', function() {
		del(['./js/compress/*'])
	})
	//默认任务
gulp.task('default', ['compress'])