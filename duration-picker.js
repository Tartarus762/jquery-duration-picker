/**
 * Created by Tartarus762 on 10/13/16.
 */
(function ($) {

    // Constructor for durationpicker 'class'
    var durationPicker = function (element, options) {
        this.settings = options;
        this.template = generate_template(this.settings);
        this.element = $(element);
        this.setup();
        var _self = this;
    };

    durationPicker.prototype = {
        constructor: durationPicker,
        setup: function () {
            this.element.before(this.template);
            this.element.hide();
            $(".durationpicker-duration").on('change', {ths: this}, function (ev) {
                var element = ev.data.ths.element;
                var value = "";
                $(this).parent().parent().find('input').each(function () {
                    var input = $(this);
                    var val = 0;
                    if (input.val() != null && input.val() != ""){
                        val = input.val();
                    }
                    value += val + input.next().text() + ",";
                });
                value = value.slice(0, -1);
                element.val(value);
            });
            // $(".durationpicker-duration").trigger();
        }
    };


    $.fn.durationPicker = function(options){
        if (options == undefined) {
            var settings = $.extend(true, {}, $.fn.durationPicker.defaults, options);
        }
        else {
            var settings = $.extend(true, {}, {classname: 'form-control'}, options);
        }

        return this.each(function () {
            return new durationPicker(this, settings)
        })
    };

    function generate_template (settings) {
        var stages = [];
        for (var key in Object.keys(settings)){
            if (Object.keys(settings)[key] != 'classname') {
                stages.push(Object.keys(settings)[key]);
            }
        }

        var html = '<div class="durationpicker-container ' + settings.classname + '">';
        for (var item in stages){
            html += '<div class="durationpicker-innercontainer"><input min="' + settings[stages[item]]['min'] + '" max="' + settings[stages[item]]['max'] + '" placeholder="0" type="number" id="duration-' + stages[item] + '" class="durationpicker-duration" ><span class="durationpicker-label">' + settings[stages[item]]['label'] + '</span></div>';
        }
        html += '</div>';

        return html
    }

    $.fn.durationPicker.defaults = {
        hours: {
        	label: "h",
        	min: 0,
        	max: 24
        },
        minutes: {
        	label: "m",
        	min: 0,
        	max: 24
        },
        seconds: {
        	label: "s",
        	min: 0,
        	max: 24
        },
        classname: 'form-control'
    };

    $.fn.durationPicker.Constructor = durationPicker;

})(jQuery);
