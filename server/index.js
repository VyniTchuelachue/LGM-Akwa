import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data", "reservations.json");

fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/reservation", (req, res) => {
  const { name, phone, date, time, guests, location, email, message, preOrder, preOrderTotal } = req.body;

  if (!name || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  const reservation = {
    id: Date.now().toString(36),
    name,
    phone,
    date,
    time,
    guests,
    location: location || "Akwa",
    email: email || null,
    message: message || null,
    preOrder: Array.isArray(preOrder) && preOrder.length > 0 ? preOrder : null,
    preOrderTotal: preOrderTotal || null,
    receivedAt: new Date().toISOString(),
  };

  const reservations = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  reservations.push(reservation);
  fs.writeFileSync(DATA_FILE, JSON.stringify(reservations, null, 2));

  const orderNote = reservation.preOrder ? ` avec pré-commande (${reservation.preOrderTotal} XAF)` : "";
  console.log(`Nouvelle réservation reçue: ${name} — ${date} ${time} (${guests} pers., ${reservation.location})${orderNote}`);
  res.status(201).json({ success: true, reservation });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le Glacier Moderne API en écoute sur http://localhost:${PORT}`);
});
