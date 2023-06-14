const AbstractManager = require("./AbstractManager");

class ObjectManager extends AbstractManager {
  constructor() {
    super({ table: "objet" });
  }

  allObject() {
    return this.database.query(`select * from  ${this.table}`);
  }
}
module.exports = ObjectManager;
