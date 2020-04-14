document.addEventListener("DOMContentLoaded", function() {
  MicroModal.init({
    openTrigger: 'data-micromodal-open',
    closeTrigger: 'data-micromodal-close',
    openClass: 'is-open',
    disableFocus: false,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    debugMode: true
  });
});