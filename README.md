# Rocket On-call :: nodejs-client

> Simplify on-call management with Rocket.
> Low availability is source of loss of money, deterioration of your brand image, and financial penalties. Reduce them by involving the right people, in the right way, at the right time.

## Usage

Create an account on [Rocket On-call](https://www.rocketoncall.com/) and activate `webhook` integration.

```sh
npm install @rocketoncall/client
```

```js
const send = require('../src/client')

send('apiKey', {
    correlationId:"MyCorrelatioEnId",
    title:"My new new incident",
    content:"This is an example of an incident triggered through the REST API.",
    priority:1,
    tags:["MyTag"]
})
.then(s =>console.log('success:', s))
.catch(e => console.error('error:', e))
```
