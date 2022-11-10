function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("helloWorld");
    }, 2000);
  });
}

async function helloWorld() {
  const str = await getString();
  console.log(str);
}

export { helloWorld };
