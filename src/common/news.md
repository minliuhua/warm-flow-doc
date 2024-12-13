# 新闻公告
<div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
    <input 
        type="text" 
        v-model="searchQuery" 
        @input="filterByTitle" 
        placeholder="搜索标题" 
        style="justify-content: flex-start; margin-right: 10px; padding: 5px; border: 1px solid #1890ff; border-radius: 4px;"
    />
    <ul id="tabs" style="list-style-type: none; padding: 0; margin: 0; font-size: 15px;">
        <li 
            class="tab" 
            :class="{ active: getSelected('') }" 
            @click="filterSelect('')"
        >
            全部
        </li>
        <li 
            class="tab" 
            v-for="(nt, index) in getType()" 
            :key="nt.key" 
            :class="{ active: getSelected(nt.key) }" 
            @click="filterSelect(nt.key)"
        >
            {{ nt.value }}
        </li>
    </ul>
</div>

<table class="no-border" style="width: 100%; border-collapse: collapse; ">
    <tbody>
       <tr v-for="(item, index) in filterList" :key="index" style="font-size: 15px;">
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

<style> 

.tab {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-bottom: none;
    background-color: #f1f1f1;
}

.tab.active {
    background-color: white;
    border-top: 2px solid blue; /* 激活页签的颜色 */
    color: red;
}

</style>

<script>
import { ref, onMounted } from 'vue';
 
export default {
  setup() {
    const allList = ref([]);
    const filterList = ref([]);
    const newsType = ref( []);
    const selectedType = ref('');
    const searchQuery = ref('');
 
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
      filterList.value = allList.value = [
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

    const filterSelect = (type) => {
      selectedType.value = type;
      if (type) {
        filterList.value = allList.value.filter(item => item.type === type);
      } else {
        fetchData();
      }
      filterByTitle();
    };

    const getSelected = (type) => {
        return selectedType.value === type
    };

    const filterByTitle = () => {
      if (searchQuery.value) {
        filterList.value = filterList.value.filter(item => 
          item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      } else {
        filterSelect(selectedType.value);
      }
    };

    return {
      allList,
      filterList,
      newsType,
      selectedType,
      searchQuery,    
      navigateTo,
      getType,
      getTypeValue,
      getTypeColor,
      filterSelect,
      getSelected,
      filterByTitle,
    };
  },
};
</script>

