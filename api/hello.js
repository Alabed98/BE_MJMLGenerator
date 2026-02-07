export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // * = alle Domains erlaubt
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.status(200).json({ message: "Hallo lokal!" });
}