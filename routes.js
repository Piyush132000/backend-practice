const fs = require("fs");

const requesrHandler = (req , res) =>{
    res.setHeader("content-type", "text/html");
    if (req.url === "/") {
      res.write("<html>");
      res.write(`<body>
                  <form method="POST" action="/message">
                  <input type="text" name="message"  />
                  <button type="submit"> Submit</button>
                  </form>
                  </body>`);
      res.write("</html>");
      return res.end();
    } else if( req.method ==="POST" && req.url === '/message') {
      const body = [];
      req.on("data", (chunk)=>{
        body.push(chunk);
      });
      req.on("end", ()=>{
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split("=")[1];
        fs.writeFile("data.json", JSON.stringify({name:message}))
      })
      const data  = JSON.parse(fs.readFileSync("data.json", (error)=>{
        res.write("<html>");
        res.write(`<body>
                 <h1>Error Occured</h1>
                    </body>`);
        res.write("</html>");
        return res.end();
      }));
      if(data){
      res.write("<html>");
      res.write(`<body>
               <h1>${data.name}</h1>
                  </body>`);
      res.write("</html>");
      return res.end();
      }
    }
}


module.exports.handler = requesrHandler;