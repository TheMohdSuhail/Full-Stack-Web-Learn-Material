// console.log("Hello MSP");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before and after pseodu selector</title>
      <style>
          body{
              margin: 0px;
              padding: 0px;
              background-color: black;
              color: white;
          }
          header::before{
              background: url(https://source.unsplash.com/user/erondu/1600x900) no-repeat center center/cover;
              content:"";
              position:absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.3;
              
          }
          .navigation{
              font-size: 20px;
              display: flex;
          }
          li{
              list-style: none;
              padding: 20px 23px;
          }
          section{
              
              margin: 3px 23px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          section::after{
              content:" This is a content"
          }
          h1{
              font-size: 4rem;
          }
          p{
              text-align: center;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contect us</li>
              </ul>
          </nav>
          
      </header>
      <section>
          <h1>Welcome to MSP </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus ut numquam repudiandae fugiat voluptatum repellendus dolorum ab aliquam eveniet reprehenderit nisi quas neque quis excepturi vero, commodi ducimus, nemo itaque laboriosam ratione facere fugit.</p>
      </section>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});