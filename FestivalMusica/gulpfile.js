const { series, parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("dart-sass"));
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

sass.compiler = require("dart-sass");


//funcion que compila sass

const paths = {
    imagenes: "src/img/**/*",
    scss: 'src/scss/**/*.scss',
    js: "src/js/**/*.js"
}

function css(done) {
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest("./build/css"));
}

function minificarCSS() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest("./build/css"));
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest("./build/img"))
    //.pipe(notify({ message: 'Imagen Minificada' }));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp(/*{
            quality: 80
        }*/))
        .pipe(dest("./build/img"))
    //.pipe(notify({ message: 'Versión webP lista' }));
}

function watchArchivo() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
}

function javascript() {
    return src(paths.js)
        .pipe(concat("bundle.js"))
        .pipe(dest("./build/js"));
}

exports.minificarCSS = minificarCSS;
exports.css = css;
exports.watchArchivo = watchArchivo;
exports.imagenes = imagenes;

exports.default = series(css, javascript, imagenes, versionWebp, watchArchivo);