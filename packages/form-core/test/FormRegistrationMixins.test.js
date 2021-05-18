import { LitElement, SafeConnectedCallbackMixin } from '@lion/core';
import { html } from '@open-wc/testing';
import { runRegistrationSuite } from '../test-suites/FormRegistrationMixins.suite.js';

runRegistrationSuite({
  suffix: 'with LitElement',
  baseElement: SafeConnectedCallbackMixin(LitElement),
});

runRegistrationSuite({
  suffix: 'with LitElement, using shadow dom',
  baseElement: class ShadowElement extends SafeConnectedCallbackMixin(LitElement) {
    render() {
      return html`<slot></slot>`;
    }
  },
});
