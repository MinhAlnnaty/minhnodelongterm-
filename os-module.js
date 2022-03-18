const os=require('os')

console.log(`this system time is ${os.uptime()}`)

const currentOS= {
    name:os.hostname(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS)