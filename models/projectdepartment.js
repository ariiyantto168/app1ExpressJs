'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projectdepartment = sequelize.define('Projectdepartment', {
    project_id: DataTypes.STRING,
    department_id: DataTypes.STRING
  }, {});
  Projectdepartment.associate = function(models) {
    // associations can be defined here
  };
  return Projectdepartment;
};