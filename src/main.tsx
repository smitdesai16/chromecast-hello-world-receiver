import './assets/css/main.css'

(async function start(): Promise<void> {
    const { startFirstPulse } = await import("./firstPulse");
    startFirstPulse();
})();