import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const result = spawnSync("npx", ["tsx", join(root, "scripts/audit-i18n-run.ts")], {
  stdio: "inherit",
  shell: true,
  cwd: root,
});

process.exit(result.status ?? 1);
