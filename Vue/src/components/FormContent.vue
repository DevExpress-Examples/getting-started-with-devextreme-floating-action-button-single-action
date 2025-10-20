<script setup lang="ts">
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';

config({
  floatingActionButtonConfig: {
    position: {
      my: 'right bottom',
      at: 'right bottom',
      of: '#app-container',
      offset: '-16 -16',
    },
  },
});

function showNotification(message: string): void {
  notify(
    {
      message: message,
      position: {
        my: 'left bottom',
        at: 'left bottom',
        of: '#app-container',
        offset: '16 -16',
      },
      minWidth: null,
      width: 320 * 0.7,
    },
    'info',
    1000
  );
}
</script>

<template>
  <div
    id="app-container"
    class="dx-widget"
  >
    <p>View's content</p>
    <DxSpeedDialAction
      hint="Edit"
      icon="edit"
      @click="showNotification('Edit is clicked')"
    />
  </div>
</template>

<style scoped>
.dx-fa-button-icon {
  text-align: center;
}

#app-container {
  height: 360px;
  width: 320px;
  border: 1px solid rgb(221 221 221);
}

p {
  font-size: 14px;
  text-align: center;
}
</style>
