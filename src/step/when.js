const { Request, Utils, Storage } = require('../support');

const { defineSupportCode } = require('cucumber');

defineSupportCode(({ When }) => {
    When(/^I GET (.*)$/, (resourceParam, callback) => {
        const resource = Utils.replaceVariables(resourceParam, Storage.getGlobalVariable());
        Request.sendRequest('GET', resource, (error) => {
            if (error) callback(new Error(error));
            callback();
        });
    });

    When(/^I POST to (.*)$/, (resourceParam, callback) => {
        const resource = Utils.replaceVariables(resourceParam, Storage.getGlobalVariable());

        Request.sendRequest('POST', resource, (error) => {
            if (error) callback(new Error(error));
            callback();
        });
        callback();
    });

    When(/^I PUT (.*)$/, (resourceParam, callback) => {
        const resource = Utils.replaceVariables(resourceParam, Storage.getGlobalVariable());

        Request.sendRequest('PUT', resource, (error) => {
            if (error) callback(new Error(error));
            callback();
        });
        callback();
    });

    When(/^I DELETE (.*)$/, (resourceParam, callback) => {
        const resource = Utils.replaceVariables(resourceParam, Storage.getGlobalVariable());

        Request.sendRequest('DELETE', resource, (error) => {
            if (error) callback(new Error(error));
            callback();
        });
        callback();
    });

    When(/^I PATCH (.*)$/, (resourceParam, callback) => {
        // TODO: Falta implementar
        callback();
    });

    When(/^I request OPTIONS for (.*)$/, (resourceParam, callback) => {
        // TODO: Falta implementar
        callback();
    });

    When(/^I set bearer token$/, (callback) => {
        // TODO: Falta implementar
        callback();
    });
});