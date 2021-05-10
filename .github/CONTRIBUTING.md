## How to Contribute

Firstly, thank you for your interest to contribute to EDB, it is greatly appreciated.

There are a few guidelines to contributing to this project, they will be seperated into categories below.

## Issues

All issues should use one of the issue templates set up in the repostitory, although if none of these fit what you need, just click the "other" tab and give as much detail as you can.

Issues should be descriptive and thought-out to a level, providing as much information as needed in a readable format.

## Pull Requests

### Requirements

Pull requests linked to issues should reference them within their text so they can be automatically closed when the PR is merged. PRs that are unlinked to an issue should give as much information as possible for what is being changed.

Pull Requests should be made to the `main` branch, preferably from a branch in your fork with a similar name to the PR, for example a pull request for updating links would have a fork branch titled `pr-update-links` .

### Commit Conventions

All commits must follow the repository [commit convention](./COMMIT_CONVENTION.md), keep this in mind when making commits as changelogs will be automatically generated when CI for a new release is ran. More information can be found [here](./VERSIONING.MD)

### Codebase Changes

All codebase changes should be as clean as possible, with comments on key parts of code and having been checked with the ESLint and Prettier configurations. Please run `npm run lint` to confirm this before making a pull request, or it will automatically fail CI when a pull request is made. If there are linting problems, you can run `npm run lint:fix` to fix them.

#### If you are trying to make new commands or translations

[Create Custom Commands](https://edb.foxgirls.cc/docs/contributing/creating-commands)   
[Create Translations](https://edb.foxgirls.cc/docs/contributing/creating-translations)

### Documentation Changes

Documentation is built from the `documentation` branch. If you are changing the documentation, please ensure it makes sense and double check it for any spelling or grammar mistakes before commiting it. Target your pull request to the documentation branch, CI will run to ensure the changes build correctly and when merged will be automatically reflected on the website. 