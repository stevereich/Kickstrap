define [
	'angular'
	'angularFire'
	'angular-route'
], (angular) ->
	angular.module('app', [
		'app.controllers'
		'app.directives'
		'app.filters'
		'firebase'
		'ngRoute'
	]).config ['$routeProvider', '$locationProvider', '$provide', ($routeProvider, $locationProvider, $provide) ->
		$provide.decorator '$sniffer', ($delegate) ->
			$delegate.history = false
		$locationProvider
			.hashPrefix('!')
			.html5Mode(false)
		for page in k$.settings.angular.pages
			$routeProvider.when '/' + page, 
				templateUrl: '/partials/' + page + '.html'
	]