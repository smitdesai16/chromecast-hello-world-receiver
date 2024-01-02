const options = new window.cast.framework.CastReceiverOptions();
options.disableIdleTimeout = true;

const context = window.cast.framework.CastReceiverContext.getInstance();

export { context as castContext, options as castOptions }