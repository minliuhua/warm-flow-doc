# 新闻公告

<table style="width: 100%; border-collapse: collapse;">
    <tbody>
       <tr v-for="(item, index) in authorsList" :key="index">
            <td style="padding: 8px;"><a :href="item.url">{{ item.title }}</a></td>
            <td style="padding: 8px;">{{ item.pushTime }}</td>
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
        }
      ]
    };
 
    onMounted(fetchData);
 
    return {
      authorsList,
    };
  },
};
</script>


