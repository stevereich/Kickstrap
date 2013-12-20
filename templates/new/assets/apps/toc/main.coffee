define ['jquery', './toc'], () ->
	$('#toc').toc
		container: 'div[ng-view]'