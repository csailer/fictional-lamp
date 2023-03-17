// This configuration sets up the release process to run on the main branch and specifies the plugins for analyzing commits, 
// generating release notes, updating the npm package, and committing the changed package.json and package-lock.json files.

module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/npm',
      [
        '@semantic-release/git',
        {
          assets: ['package.json', 'package-lock.json'],
          message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ],
  };
  