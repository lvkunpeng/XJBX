let ctx = {}

function defineGetter(property,key){
  ctx.__defineGetter__(key, function(){
    return this[property][key]
  })
}

function defineSetter(property,key){
  ctx.__defineSetter__(key, function(newValue){
    return this[property][key] = newValue
  })
}

defineGetter('request','method');
defineGetter('request','path');
defineGetter('response','body');
defineSetter('response','body');
defineGetter('response','set');
defineGetter('response','statusCode');

module.exports = ctx;