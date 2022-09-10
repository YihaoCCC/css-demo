<script setup lang="ts">
    import Layout from '../../components/Layout.vue'
    </script>
    
    <template>
      <Layout>
          <template v-slot:layout-container>
              <router-view v-slot="props">
                <transition 
                  :appear="true"
                  enter-active-class="animate__animated animate__bounceInDown"
                  leave-active-class="animate__animated animate__backOutDown"              
                >
                  <component :is="props.Component"></component>
                </transition>
              </router-view>
          </template>
      </Layout>
    </template>
    
    <style scoped>
    
    </style>
    