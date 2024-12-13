# Dromara成员项目
<div id ="dromara" v-html="content"></div>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            content: '',
        }
    },
    async mounted() {
        try {
            const response = await axios.get('https://x-file-storage.xuyanwu.cn/assets/link/member-project-pure.md');
            this.content = response.data;
        } catch (error) {
            console.error('Failed to fetch external markdown:', error);
        }
    }
}
</script>
