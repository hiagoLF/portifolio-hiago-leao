import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
	...nextVitals,
	...nextTs,
	prettier,
	{
		files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"],
		rules: {
			"max-len": ["error", { code: 100, tabWidth: 2 }],
		},
	},
	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
