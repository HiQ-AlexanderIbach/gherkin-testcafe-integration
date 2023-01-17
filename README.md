# gherkin-testcafe-integration

## install

``npm install``

Here two dependencies are installed (c.f. package.json):
 * ``testcafe``
 * ``gherkin-testcafe``

This is sufficient to run cucumber tests with the testcafe TestController.

Don't install ``cucumber`` since it is already in ``gherkin-testcafe`` integrated as a peer dependency. ``gherkin-testcafe`` extends types from ``cucumber`` (you can see this here: ``./node-modules/gherkin-testcafe/index.d.ts``). Therefore you can use the necessary ``cucumber`` types over this package. In order to get the correct types, the import path for ``@cucumber/cucumber`` is rerouted to the exports of the ``gherkin-testcafe`` package. You can see this in ``tsconfig.json``.

## run

Run your tests with the defined script in ``package.json``:

``npm run test``