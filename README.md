# Node cliff
Brings together https://github.com/raulgomis/dynamic-java-compiler and https://github.com/joeferner/node-java to
dynamically run Java in a node module.

Inspired by https://github.com/tjanczuk/edge

## Setup
### macOS Setup
```
$ brew install caskroom/cask/brew-cask
$ brew tap caskroom/homebrew-versions
$ brew cask install java8
```
### Windows Setup
TODO

# Introduction
In ES6 you can use [template strings](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings) to write multiline C# code.
```javascript
var cliff = require('cliff');

var helloWorld = cliff.func(`
public class HelloWorld implements Runnable {
  public void run() {
    System.out.println("Hello World!");
  }
}
`);

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});
```

# Error
**No Java Runtime present, requesting to install**
Review: https://github.com/joeferner/node-java/issues/90
Run: `export “JAVA_HOME=\$(/usr/libexec/java_home)”`
