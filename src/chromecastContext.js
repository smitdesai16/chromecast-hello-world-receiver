let options = null;
let context = null;

if (window.cast) {
    options = new window.cast.framework.CastReceiverOptions();
    options.disableIdleTimeout = true;
    context = window.cast.framework.CastReceiverContext.getInstance();
}

export { context as castContext, options as castOptions }