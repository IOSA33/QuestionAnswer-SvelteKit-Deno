
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ENABLELOG: string;
	export const PROGRAMFILES: string;
	export const PWD: string;
	export const TEMP: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const ACSVCPORT: string;
	export const PROCESSOR_REVISION: string;
	export const INIT_CWD: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PUBLIC: string;
	export const OS: string;
	export const LOCALAPPDATA: string;
	export const PROMPT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const RLSSVCPORT: string;
	export const USERPROFILE: string;
	export const ONEDRIVE: string;
	export const PATH: string;
	export const CHOCOLATEYLASTPATHUPDATE: string;
	export const COMMONPROGRAMFILES: string;
	export const COMPUTERNAME: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const PROGRAMDATA: string;
	export const SYSTEMROOT: string;
	export const COMMONPROGRAMW6432: string;
	export const ALLUSERSPROFILE: string;
	export const NODE_ENV: string;
	export const NPM_CONFIG_USER_AGENT: string;
	export const JAVA_HOME: string;
	export const CHOCOLATEYINSTALL: string;
	export const ACSETUPSVCPORT: string;
	export const DRIVERDATA: string;
	export const PROGRAMW6432: string;
	export const PSMODULEPATH: string;
	export const APPDATA: string;
	export const USERNAME: string;
	export const HOMEPATH: string;
	export const HOMEDRIVE: string;
	export const PROCESSOR_LEVEL: string;
	export const WINDIR: string;
	export const LOGONSERVER: string;
	export const PATHEXT: string;
	export const SYSTEMDRIVE: string;
	export const USERDOMAIN: string;
	export const COMSPEC: string;
	export const TMP: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_API_URL: string;
	export const PUBLIC_INTERNAL_API_URL: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ENABLELOG: string;
		PROGRAMFILES: string;
		PWD: string;
		TEMP: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		ACSVCPORT: string;
		PROCESSOR_REVISION: string;
		INIT_CWD: string;
		PROCESSOR_IDENTIFIER: string;
		PUBLIC: string;
		OS: string;
		LOCALAPPDATA: string;
		PROMPT: string;
		PROCESSOR_ARCHITECTURE: string;
		RLSSVCPORT: string;
		USERPROFILE: string;
		ONEDRIVE: string;
		PATH: string;
		CHOCOLATEYLASTPATHUPDATE: string;
		COMMONPROGRAMFILES: string;
		COMPUTERNAME: string;
		NUMBER_OF_PROCESSORS: string;
		PROGRAMDATA: string;
		SYSTEMROOT: string;
		COMMONPROGRAMW6432: string;
		ALLUSERSPROFILE: string;
		NODE_ENV: string;
		NPM_CONFIG_USER_AGENT: string;
		JAVA_HOME: string;
		CHOCOLATEYINSTALL: string;
		ACSETUPSVCPORT: string;
		DRIVERDATA: string;
		PROGRAMW6432: string;
		PSMODULEPATH: string;
		APPDATA: string;
		USERNAME: string;
		HOMEPATH: string;
		HOMEDRIVE: string;
		PROCESSOR_LEVEL: string;
		WINDIR: string;
		LOGONSERVER: string;
		PATHEXT: string;
		SYSTEMDRIVE: string;
		USERDOMAIN: string;
		COMSPEC: string;
		TMP: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_API_URL: string;
		PUBLIC_INTERNAL_API_URL: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
