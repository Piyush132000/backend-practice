

function replaceWhiteSpace(string){
    return String(string).replace(/\s/g,"").toLowerCase()
}


module.exports = {replace:replaceWhiteSpace}