require('dotenv').config();
const express = require('express');
const uuidv4 = require('uuid').v4;
const db = require('./db');
const logger = require('./logger');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ✅ Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'skynet-ops-audit-service',
    environment: process.env.NODE_ENV || 'dev',
    timestamp: new Date().toISOString()
  });
});

// ✅ POST /events
app.post('/events', (req, res) => {
  const { type, tenantId, severity, message, source, metadata, occurredAt } = req.body;

  // Validation
  if (!tenantId || !message) {
    return res.status(400).json({ error: 'tenantId and message are required' });
  }

  const validSeverities = ['info', 'warning', 'error', 'critical'];
  if (!validSeverities.includes(severity)) {
    return res.status(400).json({ error: 'Invalid severity' });
  }

  const eventId = `evt_${uuidv4()}`;
  const storedAt = new Date().toISOString();

  db.insertEvent({
    eventId,
    type,
    tenantId,
    severity,
    message,
    source,
    metadata: JSON.stringify(metadata || {}),
    occurredAt: occurredAt || storedAt,
    storedAt
  });

  logger.info('Event stored', { eventId, tenantId });

  res.status(201).json({
    success: true,
    eventId,
    storedAt
  });
});

app.get('/events', (req, res) => {
  const { tenantId, severity, type, limit = 20, offset = 0 } = req.query;

  db.getEvents({ tenantId, severity, type, limit, offset }, (events) => {
    res.json({
      items: events,
      total: events.length,
      limit: Number(limit),
      offset: Number(offset)
    });
  });
});

// ✅ metrics-demo
app.get('/metrics-demo', async (req, res) => {
  const { mode } = req.query;

  if (mode === 'error') {
    return res.status(500).json({ error: 'Simulated error' });
  }

  if (mode === 'slow') {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  if (mode === 'burst') {
    for (let i = 0; i < 10; i++) {
      logger.info('Burst log', { iteration: i });
    }
  }

  res.json({ message: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});