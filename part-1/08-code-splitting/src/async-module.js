function getComponent() {
  return import("lodash").then(({ default: _ }) => {
    const el = document.createElement("div");
    el.innerHTML = _.join(["this", "is", "dynamic", "import"], " ");

    return el;
  });
}

getComponent().then((el) => {
  document.body.appendChild(el);
});
