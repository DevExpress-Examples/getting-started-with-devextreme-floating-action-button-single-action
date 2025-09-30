$(() => {
  const speedDialAction = $('#floating-action-button').dxSpeedDialAction({
    label: 'Add',
    icon: 'add',
    index: 1,
    onClick() {
      DevExpress.ui.notify('SpeedDialAction was clicked!', 'success', 2000);
    },
  }).dxSpeedDialAction('instance');
});
