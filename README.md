# IPv4 Input

A plug-in that similar to windows IP input's style and behavior.

- jQuery version available
- angular version available

## Usage - jQuery

### render input

```
$("div").ipv4_input();
```

### get/set IP value (by string)

```
$("div").ipv4_input("value", "127.0.0.1");	// set IP to 127.0.0.1

$("div").ipv4_input("value");				// return "127.0.0.1"
```

### clear input

```
$("div").ipv4_input("clear");
```

### check IP address complete

```
$("div").ipv4_input("valid");				// return bool
```

### responsive

```
<div class='rwd'></div>
```


## Demo - jQuery

https://rawgit.com/greg-ku/ipv4_input/master/demo.html

## Usage - angular

### import module

```
var app = angular.module('demoApp', ['ipv4-input-directive']);
```

### input directive

```
<gk-ipv4-input></gk-ipv4-input>
```

### properties

- value
mapping the ip address string to variable

```
<gk-ipv4-input value='addr'></gk-ipv4-input>
```

- valid
mapping the valid bool to variable

```
<gk-ipv4-input valid='isValid'></gk-ipv4-input>
```

- rwd
styling the input to responsive

```
<gk-ipv4-input rwd></gk-ipv4-input>
```

## Demo - angular
https://rawgit.com/greg-ku/ipv4_input/master/demo_angular.html
