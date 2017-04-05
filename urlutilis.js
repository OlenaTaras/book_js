var urlutilit = require('url');
//распарсиваем урл

var params = urlutilit.parse(
	'http://user:pass@host.com:7001/p/a/t/h?query=string#hash', true);

	console.dir(params);

//собираем урл назад
	delete.params.host;
	params.hostname="sniffer.org";


	delete.params.search;
	params.query ={key1: 'value1', key2: 'value2'};

	console.dir(urlutilis.format(params));
	