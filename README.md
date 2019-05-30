# Pact consumer sample with nodeJS

## Generate Pact contracts

You may use a provider (mock server) and add create some tests hitting this server to make sure your codebase is compliant with your expected provider interactions.

```bash
$ yarn test:pact
```

## Use Pact contracts to run a stub server

Using the previously generated pact you can run your application with a server responding as per the contract.

```bash
$ yarn mock

# In another session
$ yarn start
```
