import { baseDir } from '@eucossa-web2-product-service-config';
import copy from 'gulp-copy';
import gulp from 'gulp';
import path from 'path';

const copyAssets = () => {
	const source = path.join(baseDir, 'src/views/*');
	const destination = path.join(baseDir, 'build', 'src','views');
	const compiled = gulp
		.src(source)
		.pipe(copy(destination, { prefix: 2 }));
		// .pipe(gulp.dest(destination));

	return compiled;
};

export default gulp.task('copy:views', copyAssets);