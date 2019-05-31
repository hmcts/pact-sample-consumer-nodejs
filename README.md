# Pact consumer sample with nodeJS

You can use git tags to follow the implementation steps:

```
git tag -n

step-1   Generate Pact contract
step-2   Use pact contract to run a stub server
step-3   Publish the contract on a broker
```

## Generate Pact contracts

You may use a provider (mock server) and add create some tests hitting this server to make sure your codebase is compliant with your expected provider interactions.

```bash
$ yarn test:pact
```

## Publish Pact contracts

You can start a local broker server using the following command:

```bash
$ yarn broker # To stop the broker use `yarn broker:stop`
```

Then trigger the publication of the contract:

```bash
$ yarn test:pact:publish
```

The broker UI is visible on http://localhost

## Use Pact contracts to run a stub server

Using the previously generated pact you can run your application with a server responding as per the contract.

```bash
$ yarn mock

# In another session
$ yarn start
```
