(async function start(): Promise<void> {
    const { startFirstPulse } = await import("./firstPulse");
    startFirstPulse();
})();