const namePackage = 'locale-region-list';
const srcRoot = `.`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: srcRoot,
  tagFormat: namePackage + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plguins: [
    [
      '@semantic-release/commit-analyzer',
      {
        "preset": "eslint",
        "releaseRules": [
          {
            "tag": "Breaking",
            "release": "major"
          },
          {
            "tag": "New",
            "release": "minor"
          },
          {
            "subject": "*",
            "release": "patch"
          },
          {
            "scope": "no-release",
            "release": false
          }
        ],
        "parserOpts": {
          "noteKeywords": [
            "BREAKING CHANGE",
            "BREAKING CHANGES"
          ]
        }
      }
    ],
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
        message: `release(version): Release ${namePackage}` +
        '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      }
    ]
  ]
}
