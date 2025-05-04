import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === "developement"; 
const repoName = "svelte-app"; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '': `/${repoName}`
		},
		prerender:{
			handleMissingId: 'warn'
		},
	}
};

export default config;
