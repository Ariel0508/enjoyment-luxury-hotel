<script setup>
const route = useRoute();
const event = useRequestEvent();
setResponseStatus(event, 404);
// 設置頁面不使用 layout
definePageMeta({ layout: false });
</script>
<template>
  <div class="not-found">
  <h1>404 Not Found</h1>
  <p>你所請求的頁面：{{ route.params.slug.join('/') }}，不存在。</p>
  </div>
</template>
<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to top, #89ecee, #FFFFFF);
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>