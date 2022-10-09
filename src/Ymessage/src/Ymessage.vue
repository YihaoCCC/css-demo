<template>
    <transition name="slide-fade">
    <div class="message-container" v-show="visibled">
      <!-- 内容 -->
      <div class="message-content">

        <!-- 消息类型图标，通过消息类型确定，text类型不配置图标 -->
        <div class="message-icon" v-if="config.icon">
          <component :class="config.icon"></component>
        </div>

		<!-- 消息文本 -->
        <span v-text="config.content"></span>

        <!-- 手动关闭消息 -->
        <div class="option" v-if="!config.close">
          <i class="ri-close-fill" @click="onClose"></i>
        </div>

      </div>
    </div>
  </transition>
</template>
<script lang="ts">
    import { reactive, toRefs } from "vue";
    export default {
      props: {
        config: { type: Object, default: () => {} }, // 消息配置项
        remove: { type: Function, default: () => {} }, // 取消挂载回调
      },
      setup(props:any) {
        const state = reactive({
          visibled: false,
        })
    
        // 打开消息
        const onOpen = (config:any) => {
          setTimeout(() => {
            state.visibled = true;
          }, 10)
    
          // 指定时间后移除消息
          if (config.duration !== 0) {
            setTimeout(() => {
              onClose();
            }, config.duration);
          }
        }
    
        onOpen(props.config)
    
        // 消息关闭
        const onClose = () => {
          state.visibled = false;
          setTimeout(() => {
            props.remove()
          }, 200)
        };
    
        return {
          ...toRefs(state),
          onOpen,
          onClose,
        };
      },
    };
    </script>

<style lang="scss" scoped>
    @import './Ymessage.scss';
</style>