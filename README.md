# Password Generator jQuery Plugin

Fast jQuery plugin for generating strong random passwords for your web pages.

### Live DEMO

[Password Generator Plugin](http://ssokurenko.github.io/jquery-password-generator-plugin/)

### Download 
- [Production version][min] (minimized)
- [Development version][max] (with code formatting and comments)

[min]: https://raw.githubusercontent.com/ssokurenko/jquery-password-generator-plugin/master/dist/jquery.jquery-password-generator-plugin.min.js
[max]: https://raw.githubusercontent.com/ssokurenko/jquery-password-generator-plugin/master/dist/jquery.jquery-password-generator-plugin.js


### Usage examples

#### Basic usage

```
$.passgen()
```

```html
<script src="jquery.js"></script>
<script src="dist/jquery-password-generator-plugin.min.js"></script>
<script>

  $(document).ready(
    function(){
      prompt('Generated password is:', $.passGen());
    }
  );

</script>
```

#### Usage with custom parameters

```
$.passGen({'length' : 8, 'numeric' : true, 'lowercase' : true, 'uppercase' : true})
```

You can redefined all or specific options:

| Option | Description | Default value |
| ------ | ----------- | ------------- |
| length | Number of characters | 10 |
| numbers | Use numbers (0, 1, 2, etc...) | true |
| lowercase | Use lowercase letters (a, b, c, etc...) | true |
| uppercase | Use uppercase letters (A, B, C, etc...) | true |


## Project Setup for Development and Testing

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

If everything goes OK, the Demo will be available at: [http://localhost:7777](http://localhost:7777)

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
