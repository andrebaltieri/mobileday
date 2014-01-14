var CityCollection = Backbone.Collection.extend({
    model: City,
    search: function (opts) {
        var result = this.where(opts);
        var resultCollection = new CityCollection(result);

        return resultCollection;
    }
});