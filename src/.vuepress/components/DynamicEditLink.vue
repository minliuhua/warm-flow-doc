<template>
  <el-link
      :href="dynamicHref"
      target="_blank"
      :icon="Edit"
      class="warm-edit"
  >
    <img src="/icons/gitee_home.svg" alt="编辑图标"> <span>编辑此页</span>
  </el-link>
</template>

<script>
export default {
  name: 'DynamicEditLink',
  data() {
    return {
      Edit: 'el-icon-edit' // 根据你的 UI 框架图标库调整
    };
  },
  computed: {
    currentPageUrl() {
      if (typeof window === 'undefined') return '';
      const url = window.location.href;
      const baseUrl = url.split('#')[0]; // 去掉锚点
      const path = new URL(baseUrl, location.origin).pathname; // 获取路径部分
      return path.replace(/\.html$/, '.md'); // 替换 .html => .md
    },
    dynamicHref() {
      const baseHref = 'https://gitee.com/warm_4/warm-flow-doc/edit/main/src';
      if (!this.currentPageUrl) return baseHref;

      return baseHref + this.currentPageUrl;
    }
  }
};
</script>

<style scoped>
.warm-edit {
  display: inline-flex;
  align-items: center;
  color: #1E90FF; /* 链接颜色 */
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.warm-edit:hover {
  color: indianred;
}

.warm-edit img {
  margin-right: 5px;
  width: 16px;
  height: 16px;
}
</style>
