window.onload = () => {
  const imgs = document.getElementsByTagName("img");
  for (const i of imgs) {
    i.onclick = () => {
      const s = document.getElementsByTagName("body")[0];

      const frame = document.createElement("div");
      frame.classList.add("img-frame");

      frame.onclick = () => {
        frame.parentElement.removeChild(frame);
      };

      const image = document.createElement("img");
      image.src = i.src;

      frame.appendChild(image);
      s.appendChild(frame);
    };
  }
};
