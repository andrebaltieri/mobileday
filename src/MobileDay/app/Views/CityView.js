CityView = Backbone.View.extend({
    el: "#main-content",
    initialize: function () {
        this.render();
    },
    render: function () {
        var template = _.template($("#city_template").html(), {});
        this.$el.html(template);
    }
});