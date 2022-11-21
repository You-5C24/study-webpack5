console.log("hello webpack");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registration success", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration error", registrationError);
      });
  });
}
