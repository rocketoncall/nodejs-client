const send = require('../src/client')

send('apiKey', {
    correlationId:"MyCorrelatioEnId",
    title:"My new new incident",
    content:"This is an example of an incident triggered through the REST API.",
    priority:1,
    tags:["MyTag"]
},
{
    host: 'api.rocketoncall.com'
})
.then(s =>console.log('success:', s))
.catch(e => console.error('error:', e))