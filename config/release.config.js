const namePackage = 'locale-region-list';
const srcRoot = `.`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: srcRoot,
  tagFormat: namePackage + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plguins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      }
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/index.js`,`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message: `feat(version): Release ${namePackage}` +
        '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      }
    ]
  ]
}
