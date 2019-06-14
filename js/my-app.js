// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'ios', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/card/',
    	url: 'card.html',
    	name: 'card',
  		},
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		{
		path: '/pulseras/',
    	url: 'pulseras.html',
    	name: 'pulseras',
  		},
		{
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
  		},
		{
		path: '/form/',
    	url: 'form.html',
    	name: 'form',
  		},
		{
		path: '/pulsera1/',
    	url: 'pulsera1.html',
    	name: 'pulsera1',
  		},
		
		{
		path: '/contact/',
    	url: 'contact.html',
    	name: 'contact',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

