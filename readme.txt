##################### GUIDE #######################
1.	#### DEPENDANCES ####
	1.0 Se placer à la racine du projet
	1.1 NodeJS && npm
		--> https://docs.npmjs.com/getting-started/installing-node
	1.2 requireJS
		npm install requirejs 
		source: (http://requirejs.org/docs/node.html#npm)
	1.3 babel
		npm install requirejs-babel 
		source: (https://babeljs.io/docs/setup/#installation)
	1.4 jasmine
			npm install jasmine
			npm install -g jasmine
			jasmine init
			source: (https://jasmine.github.io/2.5/node.html)

2.	#### TEST LAUNCH ####
	1. 	Se placer à la racine du projet en ligne de commande
	2.	lancer la commande: 	
		JASMINE_CONFIG_PATH=jasmine.config.json jasmine

3. ### TEST WRITING ###
	Tous les fichiers JS de test sont à placer selon cette architecture:
		"  src/js/__tests__/**/*.spec.js  "