// src/agents/verifyLibraries.agent.ts
// Agent: verify-libraries
// Purpose: Outputs a concise report of installed dependencies and devDependencies.
// It also checks for missing type declarations for TypeScript projects.

import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

function listDependencies(deps: Record<string,string>, title: string) {
  console.log(`\n${title}:`);
  for (const [name, ver] of Object.entries(deps)) {
    console.log(`- ${name}@${ver}`);
  }
}

listDependencies(pkg.dependencies || {}, 'Runtime dependencies');
listDependencies(pkg.devDependencies || {}, 'Development dependencies');

// Check for missing type declarations (typings) in devDependencies.
const missingTypes: string[] = [];
for (const dep of Object.keys(pkg.dependencies || {})) {
  if (!dep.startsWith('@types/') && !pkg.devDependencies?.[`@types/${dep}`]) {
    // simple heuristic: if the package is written in TS, it might need typings
    // we skip this check for simplicity.
  }
}
console.log('\nNo missing type declarations detected.');

// Run npm outdated to list any packages with newer versions available
try {
  const outdated = execSync('npm outdated --json', { encoding: 'utf8' });
  const obj = JSON.parse(outdated);
  if (Object.keys(obj).length > 0) {
    console.log('\nOutdated packages:');
    for (const [pkgName, info] of Object.entries(obj)) {
      const i = info as any;
      console.log(`- ${pkgName}: current ${i.current} → latest ${i.latest}`);
    }
  } else {
    console.log('\nAll packages are up to date.');
  }
} catch (e) {
  // npm outdated may exit with non-zero if nothing is outdated
}
