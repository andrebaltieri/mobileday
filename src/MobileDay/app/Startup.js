var AppRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        "past-editions": "pastEditions",
        "2014": "2014",
        "agenda": "agenda",
        "coordinators": "coordinators",
        "presenteers": "presenteers",
        "cities/:city": "cities",
        "coordinate": "coordinate",
        "presentation": "presentation",
        "support": "support",
        "contact": "contact"
    }
});

var router = new AppRouter;
router.on('route:home', function () {
    var view = new HomeView();
});

router.on('route:pastEditions', function () {    
    var view = new PastEditionView();
});

router.on('route:2014', function () {
    var view = new CurrentEditionView();
});

router.on('route:agenda', function () {
    var view = new AgendaView();
});

router.on('route:coordinators', function () {
    var view = new CoordinatorView();
});

router.on('route:presenteers', function () {
    var view = new PresenteerView();
});

router.on('route:cities', function (city) {
    // var entity = cities.where({ tag: city });
    var entity = cities.search({ tag: city });
    var view = new CityView({ model: entity });
});

router.on('route:coordinate', function () {
    var view = new CoordinateView();
});

router.on('route:presentation', function () {
    var view = new PresentationView();
});

router.on('route:support', function () {
    var view = new SupportView();
});

router.on('route:contact', function () {
    var view = new ContactView();
});

Backbone.history.start();