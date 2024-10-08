const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS users (
  guildId TEXT,
  userId TEXT,
  sanction INTEGER DEFAULT 0,
  whitelist INTERGER DEFAULT 0,
  PRIMARY KEY (guildId, userId)
)`);

db.run(`CREATE TABLE IF NOT EXISTS guilds (
  guildId TEXT,
  raidmode INTERGER DEFAULT 0,
  bye TEXT,
  byeTitle TEXT,
  byeTexte TEXT,
  byeColor TEXT,
  bvn TEXT,
  bvnTitle TEXT,
  bvnTexte TEXT,
  bvnColor TEXT,
  bvnRole TEXT,
  ticketGap TEXT,
  ticketGs TEXT,
  ticketCrown TEXT,
  ticketCm TEXT,
  ticketStaff TEXT,
  urlSoutien TEXT,
  roleSoutien TEXT,
  PRIMARY KEY (guildId)
)`)

db.run(`CREATE TABLE IF NOT EXISTS channels (
  guildId TEXT,
  channelId TEXT,
  snipe TEXT,
  snipeAuthor TEXT,
  autoreact TEXT,
  ghostping TEXT,
  PRIMARY KEY (guildId, channelId)
)`)

db.run(`CREATE TABLE IF NOT EXISTS logs (
  guildId TEXT,
  logscmd TEXT,
  logsmessage TEXT,
  logsserveur TEXT,
  PRIMARY KEY (guildId)
)`)

db.run(`CREATE TABLE IF NOT EXISTS sanction (
  guildId TEXT,
  ID INTERGER,
  userId TEXT,
  reason TEXT,
  PRIMARY KEY (ID)
)`)

module.exports = db;