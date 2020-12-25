<template>
  <div class="BasicInformation">
    <div class="wrap">
      <div class="basic-name">柏柏苯</div>
      <div class="basic-site">www.hyoohyo.com</div>
    </div>
    <div class="wrap">
      <div class="basic-phone"><span>电话：</span>111-1111-1111</div>
      <div class="basic-email"><span>邮箱：</span>fff@gmail.com</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInformation",
  data() {
    return {
      msg: "i am BasicInformation comp",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.BasicInformation {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: auto;
  padding: 1rem;
  background-color: blanchedalmond;
  font-size: .8rem;
}
.wrap{
  display: inline-block;
  text-align: left;
}
.basic-name {
  font-size: 1.2rem;
}
</style>
