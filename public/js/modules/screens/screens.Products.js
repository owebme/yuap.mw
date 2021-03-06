(function(app, $, $dom, EV, _){

    app.define("screens.products");

    var PARENT = app.screens;

    app.screens.products = {

        ready: false,

        init: function(){

            if (WD.ready) return;

            WD.elem = PARENT.elem.find(".WD__screen__products");

            WD.render();

            WD.ready = true;
        },

        render: function(){

            WD.elem.find(".WD__screen__cover__button").on(EV.click, function(){
                PARENT.section.open("products");
            });
        }
    };

    var WD = app.screens.products;

})(yellApp, Zepto, yellApp.$dom, yellApp.events, yellApp.utils);
