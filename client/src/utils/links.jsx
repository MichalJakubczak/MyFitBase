import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdLineWeight } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FaCalculator } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaWeight } from "react-icons/fa";

const links = [
  { text: 'Ćwiczenia', path: 'all-exercises', icon: <MdLineWeight /> },
  { text: 'Dodaj ćwiczenie', path: '.', icon: <GiWeightLiftingUp /> },
  { text: 'statystyki', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profil', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
  { text: 'BMI & BMR', path: 'bmi', icon: < FaWeight/> },
  { text: 'Kalkulator kalorii', path: 'calories', icon: <FaCalculator /> },
  { text: 'Harmonogram', path: 'agenda', icon: <FaRegCalendarCheck /> },
  { text: 'Notatnik', path: 'notes', icon: <CgNotes /> },
];

export default links;