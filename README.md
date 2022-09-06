# Packages

Personal packages monorepo

## Requisites

- [NodeJS](https://nodejs.org/) version **16 or later**
- [Yarn Berry](https://yarnpkg.com/)

## Development

### Setup

- Get a Github access token with _read:packages_ scope
- Create _.yarnrc.yml_ at home dir or repository root dir
- Add configurations below

  ```yml
  npmScopes:
    6thpath:
      npmRegistryServer: "https://npm.pkg.github.com/"
  npmRegistries:
    "https://npm.pkg.github.com/":
      npmAuthToken: <github-access-token>
  ```

- Install dependencies

  ```bash
  yarn install
  ```

### Scripts

- Cleanup repository, delete all _node_modules_ and _dist_ folder

  ```bash
  yarn clean
  ```

## Workflow / Github actions

- Get a Github access token with _repo_, _workflow_, _write:packages_ and _read:packages_ scopes
- Go to repository `settings` > `secrects` > `actions`
- Create new repository secrets

  | Secret       | Required |
  | ------------ | -------- |
  | ACCESS_TOKEN | ✓        |
  | SURGE_TOKEN  |          |

## Notes
