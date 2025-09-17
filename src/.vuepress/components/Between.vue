<template>
<!--  <div v-show="isVisible" class="wwads-cn wwads-horizontal" data-id="349"></div>-->
  <div v-show="isVisible" class="between-header">
    <a class="removeAfter" href="https://gitee.com/dromara/warm-flow">
      <img src="/ggw/bewteenone.png" alt="warm-flow Logo">
    </a>
  </div>

  <div v-show="isVisible" style="position: relative; display: flex;">
    <!-- 左侧图片 -->
    <div class="between-left">
      <a class="removeAfter" href="https://gitee.com/dromara/warm-flow">
        <img src="/ggw/bewteentwo.png" alt="warm-flow Logo">
      </a>
    </div>
    <!-- 右侧图片 -->
    <div class="between-right">
      <a class="removeAfter" href="https://gitee.com/dromara/warm-flow">
        <img src="/ggw/bewteentwo.png" alt="warm-flow Logo">
      </a>
      <!-- 使用 a 标签作为关闭按钮 -->
      <a
        href="javascript:void(0);"
        @click="hideBanner"      style="
        position: absolute;
        margin-left: 5px;
        transform: translateX(-50%);
        background-color: white;
        border-radius: 50%;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: #333;
        cursor: pointer;
        z-index: 999;">×</a>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

function hideBanner() {
  isVisible.value = false
}
</script>
<style lang="scss">
/* 定义样式 */
.between-header {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.between-header img {
  height: 40px;
  border-radius: 4px;
}

.between-left img, .between-right img {
  height: 40px;
  margin-right: 1px;
  border-radius: 4px;
}

.wwads-horizontal {
  max-width: 793px;
  padding: 0 !important;
  min-height: 0 !important;
  align-items: center;
  .wwads-content {
    .wwads-text {
      min-height: 50px;
      display: block;
      padding: 5px;
    }
  }
  .wwads-logo {
    width: 0 !important;
  }
  .wwads-img {
    margin: 0px !important;
    height: 70px;
    img {
      width: 90px !important;
    }
  }
  .wwads-poweredby {
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-logo-text {
      font-size: 12px !important;
  }
}

.removeAfter::after {
  content: none !important; /* 移除伪元素内容 */
}
</style>
