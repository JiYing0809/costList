<template>
    <div>
      <Navbar></Navbar>
      <div style="padding:15px">
           <router-view/>
      </div>
    </div>
</template>
<script>
import Navbar from './Navbar'
export default {
    name:"LayoutNew",
    components: {
     Navbar
  },
}
</script>

<style lang="less" scoped>

</style>


