# Releasing New Versions

## Making a new tag for version
**v0.0.0 = Tag for the Version**

Making a release from the latest commit:
```
git tag v0.0.0 HEAD
```
Pushing the tag to the repository
```
git push origin v0.0.0
```

## CI 
GitHub Actions will automatically generate a changelog and create a release for the tag you uploaded, be sure to update package.json and package-lock.json's version and commiting it before you push your tag, otherwise CI will encounter problems.

## CI - Prerelease
GitHub Actions will automatically generate a prerelease for any commit pushed to the repository unless you specify not to with `[skip ci]`.