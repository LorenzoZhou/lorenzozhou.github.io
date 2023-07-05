import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

export const usePicsStore = defineStore("pics", {
  state: () => ({ data: [] }),
  actions: {
    love: function (pic) {
      pic.loved = true;
    },
    unlove: function (pic) {
      pic.loved = false;
    },
  },
});
