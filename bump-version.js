/* eslint-disable */
const fs = require('fs');
const { execSync } = require('child_process');
const packageJsonPath = './package.json';
const packageJson = require(packageJsonPath);

const currentVersion = packageJson.version;
const versionParts = currentVersion.split('.').map(Number);
const newVersion = `${versionParts[0]}.${versionParts[1]}.${versionParts[2] + 1}`;

// Update the version in package.json
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

// Add the updated package.json to Git and create a version tag
execSync(`git add ${packageJsonPath}`);
execSync(`git commit -m "Bump version to ${newVersion}"`);
execSync(`git tag v${newVersion}`);

console.log(`Version bumped to ${newVersion}`);
