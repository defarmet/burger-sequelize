var db = require("../models");

module.exports = function(app)
{
	app.get("/", function(req, res)
	{
		db.Burger.findAll({order: [["burger_name", "ASC"]]})
				.then(function(response)
		{
			res.render("index", {burgers: response});
		});
	});
}
