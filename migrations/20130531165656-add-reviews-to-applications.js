module.exports = {
  up: function(migration, DataTypes) {
    migration.addColumn('Applications', 'latestReview', {
      type: DataTypes.STRING(1024),
      allowNull: true
    });
  },
  down: function(migration) {
    migration.removeColumn('Applications', 'latestReview');
  }
}