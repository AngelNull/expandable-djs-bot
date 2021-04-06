# Contributing Guide

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

When a PR is made, it will be reviewed by a maintainer, and must pass all checks before being merged.

### Commit Conventions

All commits must follow the repository [commit convention](https://github.com/AngelNull/expandable-djs-bot/blob/main/.github/COMMIT_CONVENTION.md), keep this in mind when making commits as it will not be checked pre-commit.

### Codebase Changes

All codebase changes should be as clean as possible, with comments on key parts of code and having been checked with the ESLint and Prettier configurations. Please run `npm run lint` to confirm this before making a pull request, or it will automatically fail a status check.

#### If you are trying to make new commands or translations

{% page-ref page="translations.md" %}

{% page-ref page="commands.md" %}

### Documentation Changes

Documentation is built from [**GitBook** ](https://www.gitbook.com/)and stored in the repositories `/docs/` folder. 

All documentation changes can be made to the files themselves, but it is advised to preview the markdown file before commiting it. 

