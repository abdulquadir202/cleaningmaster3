exports.notFound = function notFound(req, res, next){
	res.status(404).render('404', {layout: 'layout', title: 'Wrong Turn'});
};

exports.error = function error(err, req, res, next){
	console.log(err);
	res.status(500).render('500', {layout: 'layout',title: 'Mistakes Were Made'});
};