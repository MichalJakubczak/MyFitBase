import React from 'react';
import { DashboardContext } from '../pages/DashboardLayout';
import { useState, createContext, useContext } from 'react';


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
  { text: 'Dodaj ćwiczenie', path: '.', icon: <GiWeightLiftingUp />, role:'admin' },
 // { text: 'statystyki', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profil', path: 'profile', icon: <ImProfile /> },
  { text: 'Użytkownicy', path: 'admin', icon: <MdAdminPanelSettings />, role:'admin' },
  { text: 'BMI & BMR', path: 'bmi', icon: < FaWeight/> },
  { text: 'Kalkulator kalorii', path: 'calories', icon: <FaCalculator /> },
  //{ text: 'Harmonogram', path: 'agenda', icon: <FaRegCalendarCheck /> },
  { text: 'Dodaj wydarzenie', path: 'add-notes', icon: <CgNotes /> },
  { text: 'Harmonogram wydarzeń', path: 'all-notes', icon: <FaRegCalendarCheck /> },
];

export default links;