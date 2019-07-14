const Lot = require("../../models/Lot");
const Slot = require("../../models/Slot");
const Calculate = require("../../utils/calculate");

async function calculateByLicense(req, res, next) {
  try {
    const license = req.query.license_no;
    const slot = await Slot.findOne({ licence_no: license });
    if (!slot) throw new Error("There are no cars parked by this license");

    const entryTime = slot.entry;

    const bill = Calculate.calculateFair(entryTime);

    return res.status(200).json({
      result: bill
      // nearest,
      // updated
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
async function calculateBySlotLot(req, res, next) {
  try {
    // const license = req.body.licence_no;
    // Calculate.calculateFair;
    const slot = req.query.slot_no;
    const lot = req.query.lot_id;

    // console.log(license);
    const currentSlot = await Slot.findOne({ slot_no: slot, lot_id: lot });
    if (!currentSlot)
      throw new Error(`There are no cars parked in this ${slot} of ${lot}`);

    const entryTime = currentSlot.entry;

    const bill = Calculate.calculateFair(entryTime);

    return res.status(200).json({
      result: bill
      // nearest,
      // updated
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function parkVehicle(req, res, next) {
  try {
    const license = req.body.licence_no;
    const nearest = await Slot.findOne({ is_empty: true }, null, {
      sort: { lot_id: 1 }
    });

    if (!nearest) throw new Error("no free slots found");

    const updated = await Slot.findOneAndUpdate(
      { _id: nearest._id },
      {
        entry: new Date(),
        is_empty: false,
        licence_no: license
      },
      { new: true } //returns updated data
    );

    return res.status(200).json({
      result: updated
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}
async function unparkVehicle(req, res, next) {
  try {
    const license = req.body.license_no;
    // console.log(license);
    const slot = await Slot.findOne({ licence_no: license });
    if (!slot) throw new Error("There are no cars parked by this license");
    // console.log(slot);

    const bill = Calculate.calculateFair(slot.entry);

    // const bill2 = Calculate.calculateFair()

    const result = await Slot.findOneAndUpdate(
      { _id: slot._id },
      { is_empty: true, licence_no: null, entry: null },
      { new: true } //*** */
    );
    return res.status(200).json({
      result: bill

      // nearest,
      // updated
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = {
  parkVehicle,
  calculateByLicense,
  calculateBySlotLot,
  unparkVehicle
};
