const Q = require('q')

exports.process = async (req) => {
    var deferred = Q.defer()
    let response = {}


    switch (req.body.functionName) {
        case ('shane'):
            response = await shane(req)
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
            deferred.reject({ error: 'invalid functionName' })
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

function shane2(req) {
    var deferred = Q.defer()
    let response = { done: 'shane bowyer2' }
    deferred.resolve(response)
    return deferred.promise
}
