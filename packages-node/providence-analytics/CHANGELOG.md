# Change Log

## 0.11.0

### Minor Changes

- 72067c0d: **BREAKING** Upgrade to lit version 2

## 0.10.4

### Patch Changes

- 098365e6: move index.js to path exposed for npm

## 0.10.3

### Patch Changes

- 0e678dec: - enable debug logs in analyzers
  - export QueryService

## 0.10.2

### Patch Changes

- 02e4f2cb: add simulator to demos

## 0.10.1

### Patch Changes

- 67cd8e35: Expose analyzers that are requested to be run in external contexts

## 0.10.0

### Minor Changes

- 5db622e9: BREAKING: Align exports fields. If you want to import from CLI instead of main entrypoint (`import { ... } from 'providence-analytics';`) using export maps, you can now do so with `import { ... } from 'providence-analytics/src/cli';` instead of `import { ... } from 'providence-analytics/src/cli/index.js';`.

## 0.9.0

### Minor Changes

- b2f981db: Add exports field in package.json

  Note that some tools can break with this change as long as they respect the exports field. If that is the case, check that you always access the elements included in the exports field, with the same name which they are exported. Any item not exported is considered private to the package and should not be accessed from the outside.

## 0.8.4

### Patch Changes

- b4ec2fe8: - allowlist does not preprocess globs in cli before handing them over to the program

## 0.8.3

### Patch Changes

- 98f1bb7e: Ensure all lit imports are imported from @lion/core. Remove devDependencies in all subpackages and move to root package.json. Add demo dependencies as real dependencies for users that extend our docs/demos.

## 0.8.2

### Patch Changes

- 3cd1cf95: Relative source path util take posix path for both full path and root path, to ensure the replace happens properly.

## 0.8.1

### Patch Changes

- cfbcccb5: Fix type imports to reuse lion where possible, in case Lit updates with new types that may break us.

## 0.8.0

### Minor Changes

- ca210dae: add option skipCheckMatchCompatibility and enable for monorepos in extend-docs

## 0.7.0

### Minor Changes

- 2dc85b14: Monorepo support for extend-docs

  ### Features

  - add monorepo support for extend-docs

  ### Fixes

  - allow custom element and class definitions to be in same file for 'match-paths'

## 0.6.3

### Patch Changes

- b71bd7f2: Providence windows support

  - fix: make all tests run on Windows

## 0.6.2

### Patch Changes

- 65ecd432: Update to lit-element 2.4.0, changed all uses of \_requestUpdate into requestUpdateInterval

## 0.6.1

### Patch Changes

- 4b3ac525: Fixed version of "lit-element" for now to "~2.3.0", since breaking

## 0.6.0

### Minor Changes

- 623b10a3: Custom '--allowlist' takes precedence over '--allowlist-mode'

  #### Features

  - Custom '--allowlist' takes precedence over '--allowlist-mode' when conflicting.
    For instance, when running CLI with '--allowlist-mode git --allowlist ./dist'
    (and .gitignore contained '/dist'), './dist' will still be analyzed.

  #### Patches

  - Align naming conventions between CLI and InputDataService.gatherFilesFromDir

## 0.5.0

### Minor Changes

- ca6c8e62: Allowlist modes

  #### Features

  - Allowlist mode: autodetects whether analyzed repository is a "git" or "npm" (published artifact) repository.
    Via the cli `--allowlist-mode 'npm|git|all'` and `--allowlist-mode-reference 'npm|git|all'` can be
    configured to override the autodetected mode.

  #### Bugfixes

  - Clean output extend-docs: strings like '[no-dependency]' will not end up in aggregated result

## 0.4.0

### Minor Changes

- c702e47c: Providence update to fix some issues with target/reference and to allow filtering target project dependencies.

  #### Features

  - Allow specifying target project dependencies via CLI using `--target-dependencies` flag:
    When `--target-dependencies` is applied without argument, it will act as boolean and include all dependencies for all search targets (node_modules and bower_components).
    When a regex is supplied like `--target-dependencies /^my-brand-/`, it will filter all packages that comply with the regex.

  #### Bugfixes

  - Use the correct gatherFilesConfig for references/targets
  - Provide target/reference result match
  - Edit `from-import-to-export` helper function to work without filesystem lookup. This will allow to supply target/reference result matches to `match-imports` analyzer

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.3.0](https://github.com/ing-bank/lion/compare/providence-analytics@0.2.2...providence-analytics@0.3.0) (2020-07-22)

### Bug Fixes

- **providence-analytics:** allow dashboard to run within package ([12b6608](https://github.com/ing-bank/lion/commit/12b66085160cdae833b2c4bf9d5b6b6875f36bea))
- **providence-analytics:** allow scoped package refs dashboard ([9dea018](https://github.com/ing-bank/lion/commit/9dea01831055cfc6011825ae57b152490f86e7f4))

### Features

- **providence-analytics:** supply prev results match-imports ([e31d1f5](https://github.com/ing-bank/lion/commit/e31d1f51509dfe54c7ccb27f2f7066fc70d1cf9b))

## [0.2.2](https://github.com/ing-bank/lion/compare/providence-analytics@0.2.1...providence-analytics@0.2.2) (2020-07-13)

**Note:** Version bump only for package providence-analytics

## [0.2.1](https://github.com/ing-bank/lion/compare/providence-analytics@0.2.0...providence-analytics@0.2.1) (2020-06-29)

### Bug Fixes

- **providence-analytics:** extensions argument extend-docs ([5bf014b](https://github.com/ing-bank/lion/commit/5bf014b952f1e82620b5f100955d68136623c185))

# [0.2.0](https://github.com/ing-bank/lion/compare/providence-analytics@0.1.0...providence-analytics@0.2.0) (2020-06-29)

### Features

- **providence-analytics:** cli arguments extend-docs ([7299665](https://github.com/ing-bank/lion/commit/729966504b1e67969ea35e645a2271f61703f20a))
- **providence-analytics:** filepath matching based on anymatch ([54d06b9](https://github.com/ing-bank/lion/commit/54d06b9faa8e392d530185289a985a1212f6564f))

# 0.1.0 (2020-06-25)

### Features

- **providence-analytics:** add providence-analytics package ([e78aba8](https://github.com/ing-bank/lion/commit/e78aba8192ff0c7503497fe1f278d4b3da8b8401))
- **providence-analytics:** extend-docs cli command ([ef3d233](https://github.com/ing-bank/lion/commit/ef3d233d4e1b4ed38f78c584b98b4a736205cd0f))
