
const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Halaman pengecekan server
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "VYRA Backend aktif!"
  });
});

// Cek koneksi backend
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "online"
  });
});

// Endpoint preview
app.post("/api/resolve", (req, res) => {
  const { url, platform } = req.body || {};

  if (!url || !platform) {
    return res.status(400).json({
      success: false,
      message: "Link dan platform harus diisi."
    });
  }

  return res.status(501).json({
    success: false,
    message: "Layanan pemrosesan video belum dihubungkan."
  });
});

// Endpoint download
app.post("/api/download", (req, res) => {
  return res.status(501).json({
    success: false,
    message: "Layanan download resmi belum dihubungkan."
  });
});

app.listen(PORT, () => {
  console.log(`VYRA Backend berjalan di port ${PORT}`);
});
