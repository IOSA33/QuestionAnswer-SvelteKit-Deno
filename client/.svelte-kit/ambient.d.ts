
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
	export const WINDIR: string;
	export const JAVA_HOME: string;
	export const ONEDRIVE: string;
	export const APPDATA: string;
	export const OS: string;
	export const COMSPEC: string;
	export const SYSTEMROOT: string;
	export const COMPUTERNAME: string;
	export const PROCESSOR_REVISION: string;
	export const LOGONSERVER: string;
	export const DRIVERDATA: string;
	export const PSMODULEPATH: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const CHOCOLATEYLASTPATHUPDATE: string;
	export const COMMONPROGRAMFILES: string;
	export const PROGRAMDATA: string;
	export const PROGRAMFILES: string;
	export const RLSSVCPORT: string;
	export const NPM_CONFIG_USER_AGENT: string;
	export const HOMEDRIVE: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const PROGRAMW6432: string;
	export const ALLUSERSPROFILE: string;
	export const PWD: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const NODE_ENV: string;
	export const PATHEXT: string;
	export const COMMONPROGRAMW6432: string;
	export const ACSETUPSVCPORT: string;
	export const ENABLELOG: string;
	export const INIT_CWD: string;
	export const HOMEPATH: string;
	export const PROMPT: string;
	export const TMP: string;
	export const PROCESSOR_LEVEL: string;
	export const SESSIONNAME: string;
	export const TEMP: string;
	export const USERPROFILE: string;
	export const ACSVCPORT: string;
	export const USERDOMAIN: string;
	export const SYSTEMDRIVE: string;
	export const CHOCOLATEYINSTALL: string;
	export const PUBLIC: string;
	export const EFC_5604: string;
	export const LOCALAPPDATA: string;
	export const PATH: string;
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
		WINDIR: string;
		JAVA_HOME: string;
		ONEDRIVE: string;
		APPDATA: string;
		OS: string;
		COMSPEC: string;
		SYSTEMROOT: string;
		COMPUTERNAME: string;
		PROCESSOR_REVISION: string;
		LOGONSERVER: string;
		DRIVERDATA: string;
		PSMODULEPATH: string;
		PROCESSOR_ARCHITECTURE: string;
		CHOCOLATEYLASTPATHUPDATE: string;
		COMMONPROGRAMFILES: string;
		PROGRAMDATA: string;
		PROGRAMFILES: string;
		RLSSVCPORT: string;
		NPM_CONFIG_USER_AGENT: string;
		HOMEDRIVE: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		PROGRAMW6432: string;
		ALLUSERSPROFILE: string;
		PWD: string;
		NUMBER_OF_PROCESSORS: string;
		PROCESSOR_IDENTIFIER: string;
		NODE_ENV: string;
		PATHEXT: string;
		COMMONPROGRAMW6432: string;
		ACSETUPSVCPORT: string;
		ENABLELOG: string;
		INIT_CWD: string;
		HOMEPATH: string;
		PROMPT: string;
		TMP: string;
		PROCESSOR_LEVEL: string;
		SESSIONNAME: string;
		TEMP: string;
		USERPROFILE: string;
		ACSVCPORT: string;
		USERDOMAIN: string;
		SYSTEMDRIVE: string;
		CHOCOLATEYINSTALL: string;
		PUBLIC: string;
		EFC_5604: string;
		LOCALAPPDATA: string;
		PATH: string;
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
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
