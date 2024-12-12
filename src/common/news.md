# 新闻公告
<div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
    <select v-model="selectedType" @change="filterAuthorsList">
        <option selected value="">全部</option>
        <option v-for="(nt, index) in getType()" :key="nt.key" :value="nt.key">{{ nt.value }}</option>
    </select>
</div>
<table class="no-border" style="width: 100%; border-collapse: collapse; ">
    <tbody>
       <tr v-for="(item, index) in authorsList" :key="index" style="font-size: 15px;">
            <td class="no-border" style="width: 10%; text-align: left;">
                <div :style="{ padding: '3px', backgroundColor: getTypeColor(item.type), color: 'white', borderRadius: '4px', margin: '2px' }">
                    {{ getTypeValue(item.type) }}
                </div>
            </td>          
            <td class="no-border" style="padding: 8px; width: 66%">
                <div>
                    <span @click="navigateTo(item.url)" class="link-style">{{ item.title }}</span>
                </div>
            </td>
            <td class="no-border" style="padding: 8px; width: 10%; text-align: right;">{{ item.pushTime }}</td>
        </tr>
    </tbody>
</table>


<script>
import { ref, onMounted } from 'vue';
 
export default {
  setup() {
    const authorsList = ref([]);
    const newsType = ref( []);
    const selectedType = ref('');
 
    const fetchData = async () => {
    newsType.value = [
        {
            "key": "news",
            "value": "新闻", 
            "color": "#1890ff"
        },
        {
            "key": "notice",
            "value": "公告", 
            "color": "#ffba00"
        },
        {
            "key": "upgrade_guide",
            "value": "升级指南", 
            "color": "#ff9292"
        },
        {
            "key": "experience",
            "value": "使用心得", 
            "color": "#71e2a3"
        },
      ];
      authorsList.value = [
        {
            "type": "upgrade_guide",
            "title": "升级指南", 
            "url": "./news/upgrade_guide/4.md",
            "pushTime": "2024-11-25"
        },
        {
            "type": "experience",
            "title": "WarmFlow工作流动态指定审批人", 
            "url": "./news/experience/6.md",
            "pushTime": "2024-12-06"
        },
        {
            "type": "news",
            "title": "solon集成Warm-Flow", 
            "url": "./news/news/5.md",
            "pushTime": "2024-12-04"
        },
        {
            "type": "news",
            "title": "一个自带流程设计器的工作流引擎", 
            "url": "./news/news/3.md",
            "pushTime": "2024-11-01"
        },
        {
            "type": "news",
            "title": "gitee变成maven私库", 
            "url": "./news/news/2.md",
            "pushTime": "2024-09-29"
        }, {
            "type": "notice",
            "title": "工作流引擎Warm-Flow加入Dromara开源社区", 
            "url": "./news/notice/1.md",
            "pushTime": "2024-02-22"
        },
      ]
    };
 
    onMounted(fetchData);
 
    const navigateTo = (url) => {
      window.location.href = url;
    };

    const getType = () => {
      return newsType.value;
    };  

    const getTypeValue = (type) => {
      return newsType.value.find(nt => nt.key === type)?.value || type;
    };
    const getTypeColor = (type) => {
      return newsType.value.find(nt => nt.key === type)?.color || type;
    };

    return {
      authorsList,
      navigateTo,
      getType,
      getTypeValue,
      getTypeColor,
    };
  },
};
</script>

