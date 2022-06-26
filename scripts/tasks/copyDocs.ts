import { baseDir } from '@eucossa-web2-product-service-config';
import copy from 'gulp-copy';
import gulp from 'gulp';
import path from 'path';

const copyDocs = () => {
	const source = path.join(baseDir, '/api-specs/*');
	const destination = path.join(path.dirname(baseDir), 'build', 'src','api-specs');
	const compiled = gulp
		.src(source)
		.pipe(copy(destination, { prefix: 2 }));
		// .pipe(gulp.dest(destination));

	return compiled;
};

export default gulp.task('copy:docs', copyDocs);