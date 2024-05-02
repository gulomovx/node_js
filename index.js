const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(
            `<h2>Send email</h2>
            <form>
            <input name='email' type='email' placeholder='enter email'/>
            <button type='submit'>Send</button>
            </form>
            `
        )
    } else if (req.method === 'POST') {
        res.end('Email added')
    }
})

// server 3000 portda ekranga hello there  textini chiqarmoqda va end() bn res ni toxtatmoqda 
server.listen(3001, () => {
    console.log('server started');
    console.log('salom');
})

// server 3000 portda server started ni log qily....
