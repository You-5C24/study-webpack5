const worker = new Worker(new URL("./work.js", import.meta.url));

worker.postMessage({
  question: "what is the number?",
});

worker.onmessage = (message) => {
  console.log(`worker thread message:`, message);
};
