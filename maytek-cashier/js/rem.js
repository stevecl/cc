export default ((win, value) => {
  var tid;

  function refreshRem () {
    value = value || 1080;
    let devWidth = document.documentElement.clientWidth;
    if (devWidth > value) devWidth = value;
    document.documentElement.style.fontSize = devWidth / (value / 100) + 'px';
  }
  refreshRem();

  win.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);
})(window)
