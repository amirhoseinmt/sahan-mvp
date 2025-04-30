const url = "http://sahanai.liara.run:8000/process-text/";
const data = { text: "سلام عالی بود" };

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams(data as any).toString(),
})
  .then((response) => response.text())
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
