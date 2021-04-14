## Please use the following commit layout
This allows for automatic changelogs to be generated (Put in place 15-01-2021)

```
type(category): description [flags]
```

Where `type` is one of the following:

- breaking
- build
- ci
- chore
- docs
- feat
- fix
- other
- perf
- refactor
- revert
- style
- test

Where `flags` is an optional comma-separated list of one or more of the following (must be surrounded in square brackets):

    `breaking:` alters `type` to be a breaking change

And `category` can be anything of your choice. If you use a type not found in the list (but it still follows the same format of the message), it'll be grouped under `other`.