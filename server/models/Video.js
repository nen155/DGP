var Sequelize = require("sequelize");
var DBConnector = require("../utils/DBConnector");

// Export an anonymous function
var Video = DBConnector.connectM4E().define('VIDEO', {
	ID: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
	URL: {type: Sequelize.STRING(), allowNull: false},
	SUBTITLE: {type: Sequelize.STRING(), allowNull: false},
	ALT_TEXT: {type: Sequelize.STRING(), allowNull: false},
	CONTENT_ID: {type: Sequelize.INTEGER, allowNull: false},
	LANG_ID: {type: Sequelize.INTEGER, allowNull: true},
},
{
	instanceMethods: {
		retrieveLast: function() {
			return Video.findOne({order: 'ID DESC'});
		},
		retrieveAll: function() {
			return Video.findAll({order: 'ID DESC'});
		},
		retrieveById: function(id) {
			return Video.findOne({where: {ID: id}});
		},
		retrieveAllByContentId: function(contentId) {
			return Video.findAll({where: {CONTENT_ID: contentId }});
		},
		retrieveAllByContentIds: function(contentIds) {
			return Video.findAll({where: {CONTENT_ID: {in: contentId }}});
		},
		retrieveAllByListIds: function(listIds) {
			return Video.findAll({where: {ID: {in: listIds}}});
		},
		retrievePagination: function(inicio, fin){
			return Video.findAll({order: 'ID DESC', offset: parseInt(inicio) - 1, limit: parseInt(fin) });
		},
		add: function(photo) {
			
		},
		updateById: function(id) {
			
		},
		deleteById: function(id) {
			return Video.destroy({where: {ID: id}});
		}
	},
	freezeTableName: true
});

module.exports = Video;