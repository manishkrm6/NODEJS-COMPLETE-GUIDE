const http =  require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {
   
    //console.log(req.url,req.method,req.headers);
    
    const url = req.url;
    const method = req.method;


    let htmlCont = '';
    res.setHeader('Content-Type','text/html');    

    if ( url === '/'){
        
        htmlCont = '<html>';
        htmlCont += '<title>Enter Message</title>';
        htmlCont += '<body>';
        htmlCont += '<form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form>';
        htmlCont += '</body>';
        htmlCont += '</html>';

        res.write(htmlCont);
        let i =0;

        while(true){
            
            res.write(i);
            i++;
        }

        res.end();

    }
    
    if( url === '/message' && method === 'POST' ){
        fs.writeFileSync('message.txt','Dummy Text');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    /* htmlCont = '<html>';
    htmlCont += '<title>Enter Message</title>';
    htmlCont += '<body>';
    htmlCont += '<h2> Welcome in Node Js</h2>';
    htmlCont += '</body>';
    htmlCont += '</html>';

    res.write(htmlCont);
    res.end(); */


});

server.listen(3002);

