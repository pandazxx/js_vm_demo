const vm = require('vm');
const util = require('util');



class Document {
    constructor() {
        this.document_body = ''
        this.prototype.toString = function() {
            return this.document_body;
        }
    }

    writeln(str) {
        this.document_body += str + "\n"
    }
}

const sandbox = { document: new Document() };
vm.createContext(sandbox); // Contextify the sandbox.

const code = 'document.writeln("a fucking test"); var aa = 11;';
// x and y are global variables in the sandboxed environment.
// Initially, x has the value 2 because that is the value of sandbox.x.
vm.runInContext(code, sandbox);

console.log(sandbox['document'])

console.log(util.inspect(sandbox))