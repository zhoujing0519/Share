const gulp = require('gulp'); // gulp工具
const stylus = require('gulp-stylus'); // stylus编译
const autoprefixer = require('gulp-autoprefixer'); // 自动添加前缀

// 配置路径
let pathconfig = {
	stylusCompilePath: __dirname + '/src/stylus/**/*.styl', // 需要编译的stylus文件路径
	stylusDestPath: __dirname + '/dist/css/', // 编译后的css文件存放路径
};

// 样式任务
gulp.task('stylus', function(){
	gulp.src(pathconfig.stylusCompilePath)
	.pipe(stylus())
	.pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9'))
	.pipe(gulp.dest(pathconfig.stylusDestPath))
});

gulp.task('default', ['stylus']);