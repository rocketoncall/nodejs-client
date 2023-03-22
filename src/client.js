const https = require('https');

module.exports = function Send(apikey, data, options){
    return new Promise((resolve, reject)=>{
        const opts =  Object.assign({}, options, {
            host: 'api.rocketoncall.com',
            path: '/integrations/api/20220510/alert/'+ apikey,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })  
    
        const request = https.request(opts, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
    
            res.on('close', () => {
                const resStatus = JSON.parse(responseData)
                if (resStatus.errorType){
                    return reject(resStatus)
                }
                resolve(responseData)
            });
            
        });
        
        request.write(JSON.stringify(data));
    
        request.end();
        
        request.on('error', (err) => {
            reject(err)
        });
    })
}
