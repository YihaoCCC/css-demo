<script setup lang="ts">
    import Layout from '../../components/Layout.vue'
    </script>
    
    <template>
      <Layout>
          <template v-slot:layout-container>
            <router-view />
          </template>
      </Layout>
    </template>
    
    <style scoped>
    
    </style>
    