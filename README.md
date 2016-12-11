# jquery-duration-picker
A jQuery plugin for picking a duration of any length

Example:

![example](https://raw.githubusercontent.com/Tartarus762/jquery-duration-picker/master/duration-picker-ex.jpg)

Try it out for yourself:

<https://jsfiddle.net/0odpuwv9/>

## Requirements:

jQuery 1.8+

## Installation:

Download duration-picker.js and duration-picker.css and include both.

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
  classname: "myclass",
  responsive: true
});
```
### classname:
This specifies the class that will be added to the outermost container. Use this to control the appearance of the picker.
default: form-control

### Responsive mode:
If this is set to true, when the parent element becomes too narrow, possibly due to being viewed on a small screen, the individual inputs will display vertically instead of just moving randomly. This is set to true by default, if you don't want this, set it to false as below:
```
...
  classname: "myclass",
  responsive: false
...
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

If you put any options in, you must specify all options you require, for example, putting centuries in will not put centuries in front of the default, it will only have centuries. The exception to this is: not specifying classname will result in it having the class: form-control. Similarly not specifying responsive will result in responsive: true.

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
