var React = require('react/addons');
var Griddle = React.createFactory(require('griddle-react'));

var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 100;

var ReactApp = React.createClass({

	componentDidMount: function() {
		console.log(fakeData);

	},

	render: function() {

		return( <
			div id = "table-area" >

			<
			Griddle results = {
				fakeData
			}
			columnMetadata = {
				columnMeta
			}
			resultsPerPage = {
				resultsPerPage
			}
			tableClassName = "table" / >

			<
			/div>
		)
	}

});

/* Module.exports instead of normal dom mounting */
module.exports.ReactApp = ReactApp;
/* Normal mounting happens inside of /main.js and is bundled with browerify */