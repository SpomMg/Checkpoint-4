const AbstractManager = require("./AbstractManager");

class ObjectManager extends AbstractManager {
  constructor() {
    super({ table: "objet" });
  }

  allObject() {
    return this.database.query(
      `SELECT o.id, c.type, p.value, g.name, o.info, o.title 
      from ${this.table} AS o 
      JOIN console AS c ON c.id = o.consoleId 
      JOIN prix AS p ON p.id = o.prixId 
      JOIN genre AS g ON g.id = o.genreId`
    );
  }

  filterAll(genremultifilter, pricemultifilter, consolemultifilter) {
    const dependencies = [];

    let sql = `SELECT o.id, c.type, p.value, g.name, o.info, o.title 
    from ${this.table} AS o 
    JOIN console AS c ON c.id = o.consoleId 
    JOIN prix AS p ON p.id = o.prixId 
    JOIN genre AS g ON g.id = o.genreId`;

    if (!(genremultifilter === 0)) {
      sql += ` WHERE o.genreId = ?`;
      dependencies.push(genremultifilter);
    }
    if (!(pricemultifilter === 0)) {
      if (!(genremultifilter === 0)) {
        sql += ` AND o.prixId = ?`;
        dependencies.push(pricemultifilter);
      } else {
        sql += ` WHERE o.prixId = ?`;
        dependencies.push(pricemultifilter);
      }
    }
    if (!(consolemultifilter === 0)) {
      if (genremultifilter === 0 && pricemultifilter === 0) {
        sql += ` WHERE o.consoleId = ?`;
        dependencies.push(consolemultifilter);
      } else {
        sql += ` AND o.consoleId = ?`;
        dependencies.push(consolemultifilter);
      }
    }
    return this.database.query(sql, dependencies);
  }

  offerpost(title, genrevalue, pricevalue, consolevalue, info) {
    return this.database.query(
      `insert into ${this.table} (title, consoleId, prixId, genreId, info ) VALUES (?,?,?,?,?)`,
      [title, consolevalue, pricevalue, genrevalue, info]
    );
  }
}
module.exports = ObjectManager;
