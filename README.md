# Packages

## Requisite

- Node version **14 or later**
- Yarn

### Important

- Get a Github access token
- Create _.yarnrc.yml_ at home dir
- Add config below

  ```yml
  npmScopes:
    6thpath:
      npmRegistryServer: "https://npm.pkg.github.com/"
  npmRegistries:
    "https://npm.pkg.github.com/":
      npmAuthToken: <github-access-token>
  ```

## Setup

```bash
yarn install
```

## Scripts

- Cleanup repo, delete all _node_modules_ and _dist/build_ folder

  ```bash
    yarn clean
  ```

## Notes
