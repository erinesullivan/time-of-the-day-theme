const getTime = () => {
  const date = new Date();
  return date.toLocaleTimeString(
    'en-US',
    {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }
  );
};

const setColorPalette = () => {
  const time = getTime().replace(':', '');
  let colorPalette = 'evening';
  if (time < 1800) colorPalette = 'afternoon';
  if (time < 1200) colorPalette = 'morning';
  if (time < 0600) colorPalette = 'night';
  document.head.innerHTML += `<link rel="stylesheet" type="text/css" href="styles/variables/${colorPalette}.css" />`;
};

setColorPalette();
