const fs = require("fs");
const http = require("http");
const url = require("url");

// const tempOverview = fs.readFileSync(`${__dirname}/`);
// const data = fs.readFileSync(`./dev-data/data.json`, "utf-8");
// console.log(data);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const dataObj = JSON.parse(data);

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%OVERVIEWIMG%}/g, product.overviewImg);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%DESCRIPTIONTITLE%}/g, product.descriptionTitle);
  output = output.replace(/{%ID%}/g, product.id);
  output = output.replace(/{%PRODUCTIMGFIRST%}/g, product.productImgFirst);
  output = output.replace(/{%PRODUCTIMGSEC%}/g, product.productImgSec);
  output = output.replace(/{%PRODUCTIMGTHIRD%}/g, product.productImgThird);
  output = output.replace(/{%PRODUCTIMGFOURTH%}/g, product.productImgFourth);
  output = output.replace(/{%TD%}/g, product.td);
  output = output.replace(/{%TH%}/g, product.th);
  output = output.replace(/{%COLOR%}/g, product.color);

  // console.log(output);

  return output;
};

const tempOverviewHtml = fs.readFileSync(
  `${__dirname}/template-overview.html`,
  "utf-8"
);

const overviewIndexHtml = fs.readFileSync(
  `${__dirname}/overview-index.html`,
  "utf-8"
);
const productIndexHtml = fs.readFileSync(
  `${__dirname}/product-index.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  const pathName = req.url;

  //Overview page
  if (pathname === "/" || pathname === "/overview") {
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempOverviewHtml, el))
      .join("");
    const output = overviewIndexHtml.replace("{%PRODUCT_CARDS%}", cardsHtml);

    res.end(output);

    //Product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const product = dataObj[query.id];
    const temp = replaceTemplate(productIndexHtml, product);
    //console.log(temp);

    const replace = productIndexHtml.replace("{%FIRST_ROW%}", temp);
    //console.log(temp);

    // console.log(replace);

    const output = replaceTemplate(replace, product);
    res.end(temp);

    //API
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    //Not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
  // res.end("Hello from the server!");
});

server.listen(8000, "localhost", () => {
  console.log("Listening to requests on port 8000");
});
