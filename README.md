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
  hours: {
    label: 'hours',
    min: 0,
    max: 24
	},
  minutes: {
    label: 'minutes'
    min: 0,
    max: 60
  },
  classname: "myclass"
});
```
Note that you don't actually have to put in units of time, for example, this is also correct:
```
$('#duration-picker').durationPicker({
  zork: {
    label: 'grue',
    min: 0,
    max: 12
  },
  classname: "myclass"
});
```

If you put any options in, you must specify all options you require, for example, putting centuries in will not put centuries in front of the default, it will only have centuries. The exception to this is: not specifying classname will result in it having the class: form-control.

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
