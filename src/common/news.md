# 新闻公告
<table style="width: 100%; border-collapse: collapse;">
    <tbody>
       <tr v-for="(item, index) in authorsList" :key="index">
             <td style="padding: 8px; width: 70%">
                <div>
                    <span @click="navigateTo(item.url)" class="link-style">{{ item.title }}</span>
                </div>
            </td>
            <td style="padding: 8px; width: 10%; text-align: right;">{{ item.pushTime }}</td>
        </tr>
    </tbody>
</table>


<script>
import { ref, onMounted } from 'vue';
 
export default {
  setup() {
    const authorsList = ref([]);
 
    const fetchData = async () => {
      authorsList.value = [
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
        {
            "title": "Warm-Flow发布1.3.4, 支持solon和便捷性提升", 
            "url": "../master/update/Warm-Flow发布1.3.4, 支持solon和便捷性提升.md",
            "pushTime": "2024-12-6"
        },
      ]
    };
 
    onMounted(fetchData);
 
    const navigateTo = (url) => {
      window.location.href = url;
    };

    return {
      authorsList,
      navigateTo,
    };
  },
};
</script>

<style>

table, th, td {
  border: 1px solid rgba(0, 0, 0, 0); /* 设置透明边框，可以调整最后一个值来改变透明度 */
}

.link-style {
  cursor: pointer;
  line-height: 33px;
}

.link-style:hover {
  color: red; /* 悬浮时的颜色 */
}
</style>
