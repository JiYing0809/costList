<template>
    <div class="navbar">
       <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="changePath">
             <MenuItem name="0">
          <Icon type="ios-home" />
            主页
        </MenuItem>
        <MenuItem name="1">
           <Icon type="md-flower" />
            迎春
        </MenuItem>
        <MenuItem name="2">
         <Icon type="ios-ice-cream" />
            盛夏
        </MenuItem>
         <MenuItem name="3">
          <Icon type="ios-leaf" />
                秋月
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-snow" />
            银冬
        </MenuItem>
    </Menu>
    <!-- <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup> -->
    </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      theme1: "dark",
      path:['/home','/spring','/summer','/autumn','/winter']
    };
  },
  methods: {
    changePath(data) {
     this.$router.push(this.path[Number(data)]);
    }
  }
};
</script>
<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 1px 6px rgba(188, 169, 162, 1);
}
</style>

