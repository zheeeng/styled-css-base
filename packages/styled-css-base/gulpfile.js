const { src, dest, watch } = require('gulp');
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const config = {
    src: 'src/**/*.css',
    dest: 'presets'
}

function build() {
    return src(config.src)
        .pipe(autoprefixer())
        .pipe(dest(config.dest))
        .pipe(rename({ extname: '.scss' }))
        .pipe(dest(config.dest))
        .pipe(rename({ extname: '.less' }))
        .pipe(dest(config.dest))
        .pipe(rename({ extname: '.styl' }))
        .pipe(dest(config.dest))
}

function watchBuild() {
    watch(config.src, { ignoreInitial: false }, build)
}

exports.build = build
exports.watchBuild = watchBuild