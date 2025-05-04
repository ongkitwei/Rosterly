import { atom } from "jotai";

const campAtoms = atom("");
const shiftAtoms = atom("");
const dateAtoms = atom("");
const troopersMainAtoms = atom([""]);
const commandersAtoms = atom([]);
const reserveAtoms = atom([""]);

export {
  campAtoms,
  shiftAtoms,
  dateAtoms,
  troopersMainAtoms,
  commandersAtoms,
  reserveAtoms,
};
