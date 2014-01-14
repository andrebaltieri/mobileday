CityView = Backbone.View.extend({
    el: "#main-content",
    initialize: function () {
        this.render();
    },
    template: _.template($("#city_template").html()),
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()[0]));
    }
});