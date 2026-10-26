document.querySelectorAll('audio').forEach((audio, i) => {
  const songs = [
    '君が好き.mp3',
    'あなたと染まりたい.mp3',
    '壊さない為の距離.mp3'
  ];
  if (songs[i]) {
    audio.src = encodeURI(songs[i]);
    audio.preload = 'none';
  }
});
