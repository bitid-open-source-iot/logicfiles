const Q = require('q')

exports.process = async (req) => {
    var deferred = Q.defer()
    let response = {}


    switch (req.body.functionName) {
        case ('divideAI1'):
            response = await divideAI1(req)
            deferred.resolve(response)
            break
        case ('shane1'):
            response = await shane1(req)
            deferred.resolve(response)
            break
        case ('shane2'):
            response = await shane2(req)
            deferred.resolve(response)
            break
        default:
            req.body.error = {error: 'unhandled functionName'}
            deferred.reject(req)
    }
    req.body = { modified: 'yes' }
    deferred.resolve(req)
    return deferred.promise
}

function shane(req) {
    var deferred = Q.defer()
    let response = { done: 'shane bowyer' }
    deferred.resolve(response)
    return deferred.promise
}

function shane1(req) {
    var deferred = Q.defer()
    let response = { done: 'shane bowyer1' }
    deferred.resolve(response)
    return deferred.promise
}

function divideAI1(req) {
    var deferred = Q.defer()
    let payload = req.body.payload
    payload.AI1 = parseInt(payload.AI1) / 2
    deferred.resolve({payload: payload})
    return deferred.promise
}
