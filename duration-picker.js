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
            })
        }
    };


    $.fn.durationPicker = function(options){
        if (options == undefined) {
            var settings = $.extend(true, {}, $.fn.durationPicker.defaults, options);
        }
        else {
            var settings = $.extend(true, {}, {}, options);
        }

        return this.each(function () {
            return new durationPicker(this, settings)
        })
    };

    function generate_template (settings) {
        var stages = [];
        for (var key in Object.keys(settings.stages)){
            if (settings.stages[Object.keys(settings.stages)[key]]) {
                stages.push(Object.keys(settings.stages)[key]);
            }
        }

        var html = '<div class="durationpicker-container ' + settings.class + '">';
        for (var item in stages){
            html += '<div class="durationpicker-innercontainer"><input placeholder="0" type="number" id="duration-' + item + '" class="durationpicker-duration" ><span class="durationpicker-label">' + settings.labels[stages[item]] + '</span></div>';
        }
        html += '</div>';

        return html
    }

    $.fn.durationPicker.defaults = {
        stages: {
            hours: true,
            minutes: true,
            seconds: true
        },
        labels: {
            hours: 'h',
            minutes: 'm',
            seconds: 's'
        },
        class: 'form-control'
    };

    $.fn.durationPicker.Constructor = durationPicker;

})(jQuery);