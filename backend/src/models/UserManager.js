const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  userpost(email, password) {
    return this.database.query(
      `insert into ${this.table} (email, password, admin) VALUES (?,?,0)`,
      [email, password]
    );
  }

  addOne = async ({ email, password }) => {
    return this.database.query(
      `INSERT INTO user (email, password, admin) VALUES (?,?,0)`,
      [email, password]
    );
  };

  getUserByLogin = async (login) => {
    return this.database
      .query(`SELECT * FROM user WHERE email=?`, [login])
      .then(([result]) => result)
      .catch(() => {
        return false;
      });
  };
}
module.exports = UserManager;
