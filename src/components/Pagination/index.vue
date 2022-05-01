<template>
  <div class="pagination">
    <button @click="$emit('getPageNo', pageNo - 1)" :disabled="pageNo == 1">
      上一页
    </button>
    <button v-if="startAndEndPage.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-if="startAndEndPage.start >= 2">···</button>

    <button
      v-for="(num, index) in startAndEndPage.end"
      :key="index" v-if="num >= startAndEndPage.start"
      @click="$emit('getPageNo', num)"
      :class="{ active: pageNo == num }"
    >
      {{ num }}
    </button>

    <button v-if="startAndEndPage.end != pageSum">···</button>
    <button
      v-if="startAndEndPage.end < pageSum"
      @click="$emit('getPageNo', pageSum)"
      :class="{ active: pageNo == pageSum }"
    >
      {{ pageSum }}
    </button>
    <button
      @click="$emit('getPageNo', pageSum + 1)"
      :disabled="pageNo == pageSum"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
    <!-- <p>{{ startAndEndPage }}----{{ pageNo }}</p> -->
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 计算总共有多少页
    pageSum() {
      let sum = Math.ceil(this.total / this.pageSize);
      return sum;
    },
    // 计算连续页码的起始数字和结束数字
    startAndEndPage() {
      const { continues, pageNo, pageSum } = this;
      let start = 0;
      let end = 0;
      // 不正常现象一：总页数没有连续的页码多
      if (continues > pageSum) {
        start = 1;
        end = pageSum;
      } else {
        // 正常现象
        // 计算起始数字和结束数字
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // 不正常现象二：起始页<0
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 结束页数>总页数
        if (end > pageSum) {
          start = pageSum - continues + 1;
          end = pageSum;
        }
        return { start, end };
      }
    },
  },
  //
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background-color: #458af1;
}
</style>