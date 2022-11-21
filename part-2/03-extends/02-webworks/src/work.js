self.onmessage = (message) => {
  console.log(`the main thread message:`, message);
  self.postMessage({
    answer: 1,
  });
};
