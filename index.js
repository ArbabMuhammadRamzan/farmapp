const http = require('http');
const fs  = require('fs');
const url = require('url');
const ftn = require('./modules/replaceTemplate');

//API Code:

const api =  fs.readFileSync('./dev-data/data.json', 'utf-8');
const finalApi = JSON.parse(api);

// Working with routes:

const rootRout = fs.readFileSync('./templates/template-overview.html', 'utf-8');
const cardRout = fs.readFileSync('./templates/template-card.html', 'utf-8');
const productRout = fs.readFileSync('./templates/template-product.html', 'utf-8');

//Server Starts:


const server = http.createServer((req, res) => {
  const getUrl  = req.url;
//PATH:
  const {query, pathname} = url.parse(req.url, true);

  if(pathname === '/'){
    const finalHome = finalApi.map(el => ftn(cardRout, el)).join('');
    const render = rootRout.replace('{%PRODUCT_CARDS%}', finalHome);
    res.end(render);
  } else if(pathname === '/product'){
      const newAPI = finalApi[query.id];
      const product = ftn(productRout, newAPI);
      res.end(product);
  }
  else{
    const errPage = fs.readFile('./templates/404.html', 'utf-8', (err, data) => {
      res.end(data);
    })
  }
  
});
server.listen('3000', '127.0.0.1', () => {
  console.log("Port is on 3000");
});