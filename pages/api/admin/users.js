import db from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Admin fetches user data from the database
    db.query('SELECT * FROM users', (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      return res.status(200).json({ users: results });
    });
  }
}
