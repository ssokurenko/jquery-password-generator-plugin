# Password Generator jQuery Plugin

Fast jQuery plugin for generating strong random passwords.

### Live DEMO

[Password Generator Plugin](http://ssokurenko.github.io/jquery-password-generator-plugin/)

### Download 
- [Production version][min] (minimized)
- [Development version][max] (with code formatting and comments)

[min]: https://raw.githubusercontent.com/ssokurenko/jquery-password-generator-plugin/master/dist/jquery.jquery-password-generator-plugin.min.js
[max]: https://raw.githubusercontent.com/ssokurenko/jquery-password-generator-plugin/master/dist/jquery.jquery-password-generator-plugin.js

### Installation with Node Package Manger
```
npm install jquery-password-generator-plugin
```

Code will be available at the node_modules folder

You could also install it globally (use sudo if needed):

```
sudo npm install -g jquery-password-generator-plugin
```


### Usage examples

#### Basic usage

```
$.passgen()
```

```
<script src="jquery.js"></script>
<script src="dist/jquery-password-generator-plugin.min.js"></script>
<script>

  $(document).ready(
    function(){
      alert('Generated password: ' + $.passGen());
    }
  );

</script>
```

#### Usage with custom options

```
$.passGen({'length' : 10, 'numeric' : true, 'lowercase' : true, 'uppercase' : true, 'special' : false})
```

You can redefined all or specific options:

| Option | Description | Default value |
| ------ | ----------- | ------------- |
| length | Number of characters | 10 |
| numbers | Use numbers (0, 1, 2, etc...) | true |
| lowercase | Use lowercase letters (a, b, c, etc...) | true |
| uppercase | Use uppercase letters (A, B, C, etc...) | true |
| special | Use special characters (!, @, #, $, etc...) | false |


## Local Project Setup

Install required npm mobules

```
sudo npm install

```

Install bower dependencies

```
bower install
```

## Grunt commands


### Run server

```
grunt serve
```

If everything goes OK, the server will be available at: [http://localhost:7777](http://localhost:7777)

Tests can be found at: [http://localhost:7777/test/jquery-password-generator-plugin.html](http://localhost:7777/test/jquery-password-generator-plugin.html)

### Run tests
```
grunt test
```

Test results will be available at the console

### Building the project

```
grunt build
```

Generated files will be available at the dist folder:

```
dist/jquery.jquery-password-generator-plugin.js
dist/jquery.jquery-password-generator-plugin.min.js
```


## License

MIT © Sergey Sokurenko
