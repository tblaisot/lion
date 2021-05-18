/* eslint-disable class-methods-use-this */
import { dedupeMixin } from '@open-wc/dedupe-mixin';

/**
 * @typedef {import('../types/SafeConnectedCallbackMixinTypes').SafeConnectedCallbackMixin} SafeConnectedCallbackMixin
 */

/**
 * @type {SafeConnectedCallbackMixin}
 * @param {import('@open-wc/dedupe-mixin').Constructor<HTMLElement>} superclass
 */
const SafeConnectedCallbackMixinImplementation = superclass =>
  // eslint-disable-next-line no-unused-vars, no-shadow
  class extends superclass {
    constructor() {
      super();
      this.__safeConnectedCallbackNamespace = {};
      this.__safeConnectedCallbackNamespace.__firstConnectedCallback = true;
      this.__safeConnectedCallbackNamespace.__slotReadyQueue = [];
      this.__safeConnectedCallbackNamespace.__isMounted = false;
    }

    // connectedCallback() {
    //   if (!this.__firstConnectedCallback) {
    //     Promise.resolve().then(()=>this.safeConnectedCallback());
    //   }
    //   // @ts-ignore checking this in case we pass LitElement, found no good way to type this...
    //   if (super.connectedCallback) {
    //     // @ts-ignore checking this in case we pass LitElement, found no good way to type this...
    //     super.connectedCallback();
    //   }
    // }

    connectedCallback() {
      if (this.__safeConnectedCallbackNamespace.__firstConnectedCallback) {
        Promise.resolve().then(() => this.safeConnectedCallback());
      }
      // @ts-ignore checking this in case we pass LitElement, found no good way to type this...
      if (super.connectedCallback) {
        // @ts-ignore checking this in case we pass LitElement, found no good way to type this...
        super.connectedCallback();
      }
      if (!this.__safeConnectedCallbackNamespace.__firstConnectedCallback) {
        this.safeConnectedCallback();
      }
    }

    safeConnectedCallback() {
      this.__safeConnectedCallbackNamespace.__isMounted = true;
      this.__safeConnectedCallbackNamespace.__firstConnectedCallback = false;
      while (this.__safeConnectedCallbackNamespace.__slotReadyQueue.length > 0) {
        this.__safeConnectedCallbackNamespace.__slotReadyQueue.shift()();
      }
    }

    whenSlotReady(fn) {
      if (this.__safeConnectedCallbackNamespace.__isMounted) {
        fn();
      } else {
        this.__safeConnectedCallbackNamespace.__slotReadyQueue.push(fn);
      }
    }

    performUpdate() {
      // console.log("performUpdate", this.__firstConnectedCallback);
      if (this.__safeConnectedCallbackNamespace.__firstConnectedCallback) {
        this.safeConnectedCallback();
      }
      super.performUpdate();
    }

    // requestUpdateInternal() {
    //   console.log("requestUpdateInternal")
    //   if (this.__needSetup) {
    //     Promise.resolve().then(()=>{
    //       this.__needSetup = false;
    //       this.safeConnectedCallback();
    //     })
    //   }
    //   super.requestUpdateInternal();
    // }

    safeDisconnectedCallback() {}

    disconnectedCallback() {
      super.disconnectedCallback();
      // this.safeDisconnectedCallback();
      if (this.__safeConnectedCallbackNamespace.__isMounted) {
        this.safeDisconnectedCallback();
      } else {
        this.__safeConnectedCallbackNamespace.__slotReadyQueue.push(
          this.safeDisconnectedCallback.bind(this),
        );
      }
      this.__safeConnectedCallbackNamespace.__isMounted = false;
    }
  };

export const SafeConnectedCallbackMixin = dedupeMixin(SafeConnectedCallbackMixinImplementation);
