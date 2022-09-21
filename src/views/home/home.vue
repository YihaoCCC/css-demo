<script setup lang="ts">
    import Layout from '../../components/Layout.vue'
    </script>
    
    <template>
      <Layout>
        <!-- 一定要加mode：这个决定了动画执行的先后顺序 -->
          <template v-slot:layout-container>
              <router-view v-slot="props">
                <transition 
                  :appear="true"
                  mode="out-in"
                  enter-active-class="animate__animated animate__slideInDown"
                  leave-active-class="animate__animated animate__zoomOut"              
                >
                  <component :is="props.Component"></component>
                </transition>
              </router-view>
          </template>
      </Layout>
    </template>
    
    <style scoped>
    
    </style>
    