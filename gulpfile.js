const {series} = require(`gulp`)
const gulp = require(`gulp`)
const concat = require(`gulp-concat`)
const uglify = require(`gulp-uglifycss`)

function copiar(cb){
    gulp.src([`celular.css`,`style2.css`,`tablet.css`])
    .pipe(uglify())
    .pipe(concat(`arquivo.min.css`))
    .pipe(gulp.dest(`Build`))
    return cb
}
exports.default = series(copiar)