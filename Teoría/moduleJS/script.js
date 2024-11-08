//You should use this script in html with the type module ,
//eg ''<script type="module" src="demo.js"></script>",
//open the page in a httpserver,otherwise there will be a CORS policy error.
//script demo.js

import { cube, foo, graph } from './my-module.js';
graph.options = {
	color: 'blue',
	thickness: '3px'
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo);     // 4.555806215962888