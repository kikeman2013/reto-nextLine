
class TaskRepository {
  insertTask = async(data) => {
    const {UserId , Name , Date } = data;
    const values = [UserId , Name , Date];
    const text = 'select_ins_fn($1,%2,$3) as data';	
    const rows = (await pool.query(text, values)).rows[0].data;;
    return rows;
}

  getTask = async(data) => {
    const {UserId , Name , Date } = data;
    const values = [UserId , Name , Date];
    const text = 'select_sel_fn($1,%2,$3) as data';
    const rows = (await pool.query(text, values)).rows[0].data;
    return rows;
  }

  updateTask = async(data) => {
    const {UserId , Name , Date } = data;
    const values = [UserId , Name , Date];
    const text = 'select_upd_fn($1,%2,$3) as data';
    const rows = (await pool.query(text, values)).rows[0].data;
    return rows;
  }

  deleteTask = async(data) => {
    const {UserId , Name , Date } = data;
    const values = [UserId , Name , Date];
    const text = 'select_del_fn($1,%2,$3) as data';
    const rows = (await pool.query(text, values)).rows[0].data;
    return rows;
  }

}
module.exports = new TaskRepository();
