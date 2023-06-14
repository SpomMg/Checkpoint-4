const AbstractManager = require("./AbstractManager");

class FilterManager extends AbstractManager {
  constructor() {
    super({ table: "objet" });
  }

  getGenre() {
    return this.database.query(`select * from genre`);
  }

  getPrice() {
    return this.database.query(`select * from prix`);
  }

  getConsole() {
    return this.database.query(`select * from console`);
  }
}
module.exports = FilterManager;
