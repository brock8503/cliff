# Node cliff
Brings together https://github.com/raulgomis/dynamic-java-compiler and https://github.com/joeferner/node-java to
dynamically run Java in a node module.

Inspired by https://github.com/tjanczuk/edge

## Setup
### macOS Setup
https://brew.sh/
```
$ brew install caskroom/cask/brew-cask
$ brew tap caskroom/homebrew-versions
$ brew cask install java8
```
### Windows Setup
https://chocolatey.org/install
```
choco install javaruntime
```
# Introduction
In ES6 you can use [template strings](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings) to write multiline Java code.
```javascript
var cliff = require('cliff');

var helloWorld = cliff.func(`
  public class HelloWorld implements Runnable {
    String input;
    public HelloWorld(String input) {
      this.input = input;
    }
    public void run() {
      System.out.println("Hello " + this.input + " World!");
    }
  }
`);

helloWorld('JavaScript', function (error, result) {
  if (error) throw error;
});
```

# Error
**No Java Runtime present, requesting to install**
Review: https://github.com/joeferner/node-java/issues/90
Run: `export “JAVA_HOME=\$(/usr/libexec/java_home)”`
