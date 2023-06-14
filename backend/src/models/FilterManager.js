const AbstractManager = require("./AbstractManager");

class FilterManager extends AbstractManager {
  constructor() {
    super({ table: "objet" });
  }

  getGenre() {
    return this.database.query(`select name from genre`);
  }

  getPrice() {
    return this.database.query(`select value from prix`);
  }

  getConsole() {
    return this.database.query(`select type from console`);
  }
}
module.exports = FilterManager;
