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

/*

	$('#banner').html("");
	$('section#banner').removeAttr('id');
	$('section').attr('#banner-portfolio');
	$('section#banner-portfolio').load("portfolio.html");

		{'background-attachment': 'scroll, scroll, fixed',
		'background-color': '#ffffff',
		'background-image': 'url("images/light-bl.svg"), url("images/light-br.svg"), url("../images/banner.jpg")',
		'background-position': 'top center, top center, top center',
		'background-repeat': 'no-repeat, no-repeat, no-repeat',
		'background-size': '50em, 50em, auto',
		'color': 'white',
		'cursor': 'default',
		'padding': '5em 0em 5em 0em',
		'margin': '3em 3em 0em 3em',
		'text-align': 'center'}
		*/