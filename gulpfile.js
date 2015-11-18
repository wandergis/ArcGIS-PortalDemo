var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyHtml = require("gulp-minify-html");
var del = require('del');
gulp.task('compress', function() {
	gulp.src(['./js/**/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('./compressjs'));
})
gulp.task('minify-html', function() {
	gulp.src('index.html') // 要压缩的html文件
		.pipe(minifyHtml()) //压缩
		.pipe(gulp.dest('dist'));
});
gulp.task('clean', function() {
		del(['./js/compress/*'])
	})
	//默认任务
gulp.task('default', ['minify-html'])