var db = require("../models");

module.exports = function(app)
{
	app.post("/api/burgers", function(req, res)
	{
		db.Burger.create({burger_name: req.body.name})
				.then(function(response)
		{
			res.json(response);
		});
	});

	app.put("/api/burgers/:id", function(req, res)
	{
		console.log(req.body);
		db.Burger.update({devoured: true}, {where: {id: req.params.id}})
				.then(function(response)
		{
			res.json(response);
		});
	});
}
