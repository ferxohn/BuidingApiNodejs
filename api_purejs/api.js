const http = require('http');

const server = http.createServer((req, res)=> {
    let url = req.url;
    const tokens = url.split('?');
    url = tokens[0];
    const queryString = tokens[1];
    const method = req.method;
    const headers = req.headers
    let students = [];

    switch (url) {
        case '/student':
            if (method === 'GET') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(students[queryString]));
            }
            else if (method == 'POST') {
                const body = []
                req.on('data', (chunk) => {
                    body.push(chunk);
                })
                console.log(body);
                req.on('end', () => {
                    const bodyParsed = Buffer.concat(body).toString();
                    const reqInstance = JSON.parse(bodyParsed);
                    students.push(reqInstance);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(reqInstance));
                })
            }
            break;
    
        default:
            res.statusCode = 404;
            res.end(JSON.stringify({err: 'Not found'},))
            break;
    }
})

server.listen(3000)