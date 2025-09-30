<script setup lang="ts">
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import notify from 'devextreme/ui/notify';
import type { DxSpeedDialActionTypes } from 'devextreme-vue/speed-dial-action';
import type { SpeedDialActionOptions } from '../types';

const speedDialActionOptions: SpeedDialActionOptions = {
  label: 'Add',
  icon: 'add',
  index: 1,
};

const handleClick = (e: DxSpeedDialActionTypes.ClickEvent): void => {
  const label = e.component.option('label');
  notify(`SpeedDialAction \`${label}\` was clicked!`, 'success', 2000);
};
</script>

<template>
  <div id="app-container">
    <DxSpeedDialAction
      :label="speedDialActionOptions.label"
      :icon="speedDialActionOptions.icon"
      :index="speedDialActionOptions.index"
      @click="handleClick"
    />
  </div>
</template>

<style scoped>
#app-container {
  width: 900px;
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px auto;
}
</style>
