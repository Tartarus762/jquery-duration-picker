# jquery-duration-picker
A jQuery plugin for picking a duration of any length

## Requirements:

jQuery 1.8+

## Installation:

Download duration-picker.js and duration-picker.css and include both in your html.

## Usage:

### html:
Create an input with type text and any id and name you want. Note that in order for the picker to post any data, the input must still have a name.
```
<input id="duration-picker" type="text" name="duration-picker">
```

### js:
Use jQuery to get a reference to the input and call durationPicker() on it.
```
$('#duration-picker').durationPicker();
```
This will inititalise the duration picker with default options: hours, minutes and seconds with the labels: h, m, s.
Will also have a bootstrap class, which can be changed in the options.

## Options:
To specify options for the plugin, do the following:
```
$('#duration-picker').durationPicker({
  stages: {
	centuries: true,
	decades: true,
	years: true,
	months: true,
	hours: true,
	...
  },
  labels: {
    centuries: "C",
    decades: "D",
    years: "Years",
    months: "mnths",
    hours: "HOURS",
    ...
  },
  class: "myclass"
});
```
You can put any items in any order in stages and labels but there must be a label with the same key as every stage, for example:

incorrect:
```
$('#duration-picker').durationPicker({
  stages: {
    centuries: true,
    decades: true,
  },
  labels: {
    months: "mnths",
    hours: "HOURS",
  },
  class: "myclass"
});
```

correct:
```
$('#duration-picker').durationPicker({
  stages: {
    centuries: true,
    decades: true,
  },
  labels: {
    centuries: "centuries",
    decades: "whatever",
  },
  class: "myclass"
});
```

Note that you don't actually have to put in units of time, for example, this is also correct:
```
$('#duration-picker').durationPicker({
  stages: {
    zork: true,
    laptop: true,
  },
  labels: {
    zork: "grue",
    laptop: "open",
  },
  class: "myclass"
});
```

## Using the data:

You can get the output from the picker either from post data if it's in a form, the same way you do for any input, or by calling .val() on the original element. The data will be comma separated. For example:

Using Django to get an array of values:
```
if request.POST:
  items = request.POST['duration-picker'].split(',')
  print(items)
```

Results in (by default, no input):
```
[0h, 0m, 0s]
```

Using jQuery:
```
var items = $('#duration-picker').val().split(",");
console.log(items);
```

Results in (by default, no input):
```
[0h, 0m, 0s]
```
