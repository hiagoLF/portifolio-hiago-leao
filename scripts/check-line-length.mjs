import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const paths = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"])
	.toString()
	.split("\0");
const ignored =
	/(^|\/)(package-lock\.json|next-env\.d\.ts)$|\.(svg|ico|png|jpg|woff2?|tsbuildinfo)$/;
let failed = false;

for (const path of new Set(paths.filter(Boolean))) {
	if (ignored.test(path)) continue;
	let content;
	try {
		content = readFileSync(path, "utf8");
	} catch (error) {
		if (error.code === "ENOENT") continue;
		throw error;
	}
	if (content.includes("\0")) continue;
	for (const [index, line] of content.split(/\r?\n/).entries()) {
		const length = [...line.replaceAll("\t", "  ")].length;
		if (length <= 100) continue;
		console.error(`${path}:${index + 1}: line has ${length} characters (maximum 100).`);
		failed = true;
	}
}

if (failed) process.exitCode = 1;
