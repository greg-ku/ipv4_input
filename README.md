# IPv4 Input

A jQuery plug-in that similar to windows IP input's style and behavior.

## Installation

```
npm install --save jquery-ipv4-input
```

or

```
bower install --save jquery-ipv4-input
```

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
$("div").ipv4_input("rwd");
```

### set properties at once

```
$("div").ipv4_input({"rwd": true, "value": "127.0.0.1"});
```

## Demo

[Try it](https://rawgit.com/greg-ku/ipv4_input/master/demo.html)

## Change log

### 1.0.1

- refine responsive css

### 1.1.0

- able to set responsive in script
- able to set properties by passing an object
