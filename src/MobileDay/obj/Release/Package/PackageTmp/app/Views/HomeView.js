HomeView = Backbone.View.extend({
    el: "#main-content",
    initialize: function () {
        this.render();
    },
    render: function () {
        var template = _.template($("#home_template").html(), {});
        this.$el.html(template);
    }
});