var gulp = require("gulp");
var watch = require("gulp-watch");
var less = require("gulp-less");
var pug = require("gulp-pug");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");

gulp.task("fonts", function() {
	return gulp.src("src/fonts/**/*", {base: "src"})
	.pipe(gulp.dest("build"))
});

gulp.task("image", function() {
	return gulp.src("src/images/**")
	.pipe(gulp.dest("build/images"))
});

gulp.task("del", function() {
	return del("build/images/**")
});

gulp.task("less", function() {
	return gulp.src("src/style/*.less", {base: "src"})
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("build"))
});

gulp.task("pug", function() {
	return gulp.src("src/*.pug")
	.pipe(pug())
	.pipe(gulp.dest("build"))
});

gulp.task("js", function() {
	return gulp.src("src/js/**/*.js", {base: "src"})
	.pipe(gulp.dest("build"))
});

gulp.task("build", gulp.series("del", "image", "fonts", "less", "pug", "js"));

gulp.task("watch", function() {
	gulp.watch("src/images/*.*", gulp.series("del", "image"))
	gulp.watch("src/fonts/**/*.*", gulp.series("fonts"))
	gulp.watch("src/style/**/*.less", gulp.series("less"))
	gulp.watch("src/**/*.pug", gulp.series("pug"))
	gulp.watch("src/js/**/*.js", gulp.series("js"))
});

gulp.task("dev", gulp.series("build", "watch"));