$(() => {
  const showNotification = function (message) {
    DevExpress.ui.notify({
      message,
      position: {
        my: 'left bottom',
        at: 'left bottom',
        of: '#app-container',
        offset: '16 -16',
      },
      minWidth: null,
      width: $('#app-container').width() * 0.7,
    }, 'info', 1000);
  };

  DevExpress.config({
    floatingActionButtonConfig: {
      position: {
        my: 'right bottom',
        at: 'right bottom',
        of: '#app-container',
        offset: '-16 -16',
      },
    },
  });

  $('#action-edit').dxSpeedDialAction({
    hint: 'Edit',
    icon: 'edit',
    onClick() {
      showNotification('Edit is clicked');
    },
  });
});
