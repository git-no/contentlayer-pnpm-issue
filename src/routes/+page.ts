import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		// Load file & parse MDX
		const content = import(`../test.md`); // fails with PNPM, works with NPM

		return {
			content
		};
	} catch (e) {
		throw error(404, `Could not find `);
	}
}) satisfies PageLoad;
