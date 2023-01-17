import { Before } from '@cucumber/cucumber'

/**
 * The global before hook.
 * Runs before EACH scenario.
 */
Before(async (t) => {
    console.log(JSON.stringify(t as TestController));
});