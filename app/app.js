/**
 * Created by synerzip on 15/5/14.
 */
require(['bower_components/aura/lib/aura'], function(Aura) {
    $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
    });

    $.fn.serializeObject = function () {
        var o = Object.create(null),
            elementMapper = function (element) {
                element.name = $.camelCase(element.name);
                return element;
            },
            appendToResult = function (i, element) {
                var node = o[element.name];

                if ('undefined' != typeof node && node !== null) {
                    o[element.name] = node.push ? node.push(element.value) : [node, element.value];
                } else {
                    o[element.name] = element.value;
                }
            };

        $.each($.map(this.serializeArray(), elementMapper), appendToResult);
        return o;
    };

    Aura()
        .use('extensions/aura-awesome-extension')
        .use('extensions/aura-backbone')
        .start({ components: 'body' }).then(function() {
            console.warn('Aura started...');
        });
});