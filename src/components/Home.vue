<template>

<div >
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="4"><div class="grid-content ">金昌路公司通报系统</div></el-col>

        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">文件上传</template>
                <router-link tag="li" to="/FillUp">
                  <el-menu-item index="1-1">文件上传</el-menu-item>
                </router-link>

              </el-submenu>
              <el-submenu index="2">
                <template slot="title">营业厅</template>
                <router-link tag="li" to="/AnnounceByDay">
                  <el-menu-item index="2-1">数据通报</el-menu-item>
                </router-link>

              </el-submenu>

              <el-submenu index="3">
                <template slot="title" >渠道经理</template>
                <router-link tag="li" to="/Channel">
                  <el-menu-item index="3-1" >数据通报</el-menu-item>
                </router-link>

              </el-submenu>

              <el-submenu index="4">
              <template slot="title">自有人员</template>
              <router-link tag="li" to="/self">
                <el-menu-item index="4-1">社区经理</el-menu-item>
              </router-link>
                <router-link tag="li" to="/customer">
                  <el-menu-item index="4-2">客户经理</el-menu-item>
                </router-link>

            </el-submenu>

              <el-submenu index="5">
                <template slot="title">可视化分析</template>
                <router-link tag="li" to="/all">
                  <el-menu-item index="5-0">全公司发展总览</el-menu-item>
                </router-link>
                <router-link tag="li" to="/test">
                  <el-menu-item index="5-1">营业厅总览</el-menu-item>
                </router-link>

                <router-link tag="li" to="/channelSum">
                  <el-menu-item index="5-2">渠道经理总览</el-menu-item>
                </router-link>

                <router-link tag="li" to="/bEveryNewadd">
                  <el-menu-item index="5-3">各营业厅新增</el-menu-item>
                </router-link>

                <router-link tag="li" to="/bEveryBtz">
                  <el-menu-item index="5-4">各营业厅保提转</el-menu-item>
                </router-link>

                <router-link tag="li" to="/channelManger">
                  <el-menu-item index="5-5">各渠道经理新增</el-menu-item>
                </router-link>

                <router-link tag="li" to="/channelMangerBtz">
                  <el-menu-item index="5-6">各渠道经理保提转</el-menu-item>
                </router-link>

                <router-link tag="li" to="/channelTop10">
                  <el-menu-item index="5-7">渠道发展TOP10(日)</el-menu-item>
                </router-link>

                <router-link tag="li" to="/channelTop10M">
                  <el-menu-item index="5-8">渠道发展TOP10(月)</el-menu-item>
                </router-link>
              </el-submenu>




            </el-menu>
          </div></el-col>

      </el-row>

    </el-header>

    <el-main class="el-main-style" >
      <transition name="fade" mode="fade-enter" >

        <router-view ></router-view>

      </transition>
    </el-main>
    <el-footer style="height: 30px">Copyright &copy;2018 BUPTWQP</el-footer>
  </el-container>



</div>
</template>

<style scoped>
  .el-header{
    background-color: rgb(84, 92, 100);
    color: #D3DCE6;
    text-align: center;
    line-height: 60px;
    height: 30px;
  }
  .el-footer{
    background-color: rgb(84, 92, 100);
    color: #D3DCE6;
    text-align: center;
    line-height: 30px;

  }
  * {
     box-sizing: border-box;
   }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 500px;
  }

  .el-main {
    background-color: #fafbfc;
    color: #2b2b2b;
    text-align: center;
    line-height: 50px;
    height:450px ;
    padding: 0px;
  }

  .el-main-style {

    margin: 0 20px 0 20px;
  }


  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>




