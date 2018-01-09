var gulp = require("gulp"),
    sass = require("gulp-sass"),
    util = require("gulp-util"),
    pass = true;

gulp.task("default", function () {
    gulp.watch("./sass/**/*.scss", function (e) {
       pass = true;
       gulp.src(e.path)
        .pipe(sass().on("error", function () {
            pass = false;
        }))
        .pipe(gulp.dest("./css"))
        .on("end", function () {
            if (pass) {
                util.log(util.colors.green("Compiled Sass"))
            } else {
                util.log(util.colors.red("Sass Error"))
            }
        });
    });
});
