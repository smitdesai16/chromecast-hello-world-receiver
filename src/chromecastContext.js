let options = null;
let context = null;

const loadCastInterval = setInterval(function () {
    if (window.cast) {
        clearInterval(loadCastInterval);
        options = new window.cast.framework.CastReceiverOptions();
        options.disableIdleTimeout = true;
        options.maxInactivity = 5;
        options.versionCode = 1; // keep incrementing this
        context = window.cast.framework.CastReceiverContext.getInstance();
    }
}, 500);

export { context as castContext, options as castOptions }