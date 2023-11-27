import React from 'react';

import { IoBarChartSharp } from 'react-icons/io5';
import { MdLineWeight } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  { text: 'add exercise', path: '.', icon: <GiWeightLiftingUp /> },
  { text: 'all exercises', path: 'all-exercises', icon: <MdLineWeight /> },
  { text: 'stats', path: 'stats', icon: <IoBarChartSharp /> },
  { text: 'profile', path: 'profile', icon: <ImProfile /> },
  { text: 'admin', path: 'admin', icon: <MdAdminPanelSettings /> },
];

export default links;