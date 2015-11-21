# IPv4 Input

A jQuery plug-in that similar to windows IP input's style and behavior.

## Usage

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


## Demo

https://rawgit.com/greg-ku/ipv4_input/master/demo.html
