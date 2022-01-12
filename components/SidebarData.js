import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs'
import * as SiIcons from 'react-icons/si'
import * as GoIcons from 'react-icons/go'


export const SidebarData = [
  {
    title: 'กระดานสนทนา',
    path: '/feel',
    icon: <BsIcons.BsFillChatRightTextFill />,
    cName: 'nav-text mt-2'
  },
  {
    title: 'ห้องสนทนา',
    path: '/modalroom',
    icon: <SiIcons.SiGoogleclassroom />,
    cName: 'nav-text',
    
  },
  {
    title: 'ตั้งค่า',
    path: '/',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'ออกจากระบบ',
    path: '/',
    icon: <GoIcons.GoSignOut />,
    cName: 'nav-text' 
  }
];