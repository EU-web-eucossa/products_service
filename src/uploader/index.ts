import multer from 'multer';

// Create a memory storage for multer
const storage = multer.memoryStorage();

export default multer({
	storage,
	limits: {
		fileSize: 1 * 1024 * 1024, // 1MB
	},
	fileFilter(req, file, callback) {
		const allowedTypes = [
			'image/jpeg',
			'image/jpg',
			'image/png',
			'image/webp',
		];
		if (allowedTypes.includes(file.mimetype)) callback(null, true);
		else callback(new Error('Invalid file type'));
	},
});
