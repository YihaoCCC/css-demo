<template>
    <div class="components">
        <div class="switch">
            <input type="checkbox" name="" id="switch1">
            <label for="switch1"></label>
        </div>
        <div class="switch">
            <input type="checkbox" name="" id="switch2">
            <label for="switch2"></label>
        </div>

        <div class="segmented-control">
      
            <input type="radio" name="radio2" value="3" id="tab-1" checked/>
            <label for="tab-1" class= "segmented-control__1">
              <p>Tab 1</p></label>
            
            <input type="radio" name="radio2" value="4" id="tab-2" />
            <label for="tab-2" class= "segmented-control__2">
              <p>Tab 2</p></label>
            
            <input type="radio" name="radio2" value="5" id="tab-3" />
            <label for="tab-3" class= "segmented-control__3">
              <p>Tab 3</p></label>
            
            <div class="segmented-control__color"></div>
        </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
    @import './dashbord.scss';
</style>