import React from 'react';

export default function BrowserTheme() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(isDarkMode); // 다크모드라면 트루반환
  return <>BrowserTheme</>;
}
