const express = require("express");
const { authenticate } = require("../middlewares/auth");
const {
  createReservation,
  getReservations,
  getReservationById,
  updateReservation,
  deleteReservation,
  getOrCreateTripByDetails
} = require("../controllers/reservationController");

const router = express.Router();

router.post("/", authenticate(["commuter"]), createReservation);
router.get("/trip", authenticate(["admin", "operator", "commuter"]), getOrCreateTripByDetails);
router.get("/", authenticate(["admin", "operator", "commuter"]), getReservations);
router.get("/:id", authenticate(["admin", "operator", "commuter"]), getReservationById);
router.put("/:id", authenticate(["commuter", "admin"]), updateReservation);
router.delete("/:id", authenticate(["commuter", "admin"]), deleteReservation);

module.exports = router;
