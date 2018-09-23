const java = require("java");
java.classpath.push("lib/dynamic-java-compiler-0.1-SNAPSHOT.jar");

let compiler = java.newInstanceSync("com.raulgomis.djc.DynamicCompiler");

function getClassName(code) {
  let pattern = /class (.*[A-z]) implements/i
  return code.match(pattern)[1]
}

exports.func = function(code) {
  return function (input, cb) {
    java.callMethod(compiler, "compile", null, getClassName(code), code, function(err, results) {
        if(err) { console.error(err); return; }
        java.callMethod(results, "newInstance", function(err, results){
          if(err) { console.error(err); return; }
          java.callMethod(results, "run", cb)
        })
    })
  }
}
