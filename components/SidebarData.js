import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs'
import * as SiIcons from 'react-icons/si'
import * as GoIcons from 'react-icons/go'

export const SidebarData = [
  {
    title: 'หน้าหลัก',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'กระดานสนทนา',
    path: '/',
    icon: <BsIcons.BsFillChatRightTextFill />,
    cName: 'nav-text'
  },
  {
    title: 'ห้องสนทนา',
    path: '/messages',
    icon: <SiIcons.SiGoogleclassroom />,
    cName: 'nav-text'
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