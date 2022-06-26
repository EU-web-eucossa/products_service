/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypeMapper<T> = {
	[P in keyof T]: T[P] extends (...args: any[]) => any
		? (...args: Parameters<T[P]>) => ReturnType<T[P]>
		: T[P];
};
