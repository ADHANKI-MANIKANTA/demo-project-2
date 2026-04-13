const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./events.db');

// Create table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      eventId TEXT PRIMARY KEY,
      type TEXT,
      tenantId TEXT,
      severity TEXT,
      message TEXT,
      source TEXT,
      metadata TEXT,
      occurredAt TEXT,
      storedAt TEXT
    )
  `);
});

// Insert
function insertEvent(event) {
  const stmt = db.prepare(`
    INSERT INTO events VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    event.eventId,
    event.type,
    event.tenantId,
    event.severity,
    event.message,
    event.source,
    event.metadata,
    event.occurredAt,
    event.storedAt
  );

  stmt.finalize();
}
function getEvents(filters, callback) {
  let query = "SELECT * FROM events WHERE 1=1";
  let params = [];

  if (filters.tenantId) {
    query += " AND tenantId=?";
    params.push(filters.tenantId);
  }

  if (filters.severity) {
    query += " AND severity=?";
    params.push(filters.severity);
  }

  if (filters.type) {
    query += " AND type=?";
    params.push(filters.type);
  }

  query += " ORDER BY storedAt DESC LIMIT ? OFFSET ?";
  params.push(Number(filters.limit), Number(filters.offset));

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error(err);
      return callback([]);
    }
    callback(rows);
  });
}


module.exports = { insertEvent, getEvents };