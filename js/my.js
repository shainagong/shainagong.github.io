$('#aboutme_link').on('click', function(e) {
	e.preventDefault();
	$('#banner').load("aboutme.html");
});

$('#backtohome').on('click', function(e) {
	e.preventDefault();
	$('#banner').load("header.html");
});

$('#contact_link').on('click', function(e) {
	e.preventDefault();
	$('#banner').load("contact.html");
});

$('#portfolio_link').on('click', function(e) {
	e.preventDefault();
	$('#banner').removeAttr('padding');
	$('#banner').load("portfolio.html");
});