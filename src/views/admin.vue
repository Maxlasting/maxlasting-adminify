<template>
  <div class="admin-route-box flex column">
    <header class="main-header-box">
      <el-row class="fh">
        <el-col class="fh" :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <h1 class="title flex center">
            <img src="../assets/logo.png" alt="adminify">
            <router-link to="/" tag="span">Adminify</router-link>
          </h1>
        </el-col>
        <el-col :xs="19" :sm="19" :md="19" :lg="20" :xl="21" class="fh">
          <el-row class="fh">
            <el-col :span="22" class="fh"></el-col>
            <el-col :span="2" class="fh">
              <router-link class="logout-box fh flex center" to="/login" tag="div">
                <img src="../assets/logout.png" width="40" height="40">
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </header>
    <el-row class="full">
      <el-col class="fh" :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-menu class="fh fw" background-color="#474747" text-color="#ffffff" router :default-active="$route.path">
          <el-menu-item v-for="item in routerMap" :key="item.key" :index="item.key" :disabled="item.disabled">
            <i :class="item.icon"></i>
            {{ item.text }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="19" :sm="19" :md="19" :lg="20" :xl="21" class="fh flex column">
        <el-row class="bread-menu-box">
          <el-col :span="20" class="fh flex align-center">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-if="item.path" :to="item.path">{{ breadMap[item.path] }}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="4" class=""></el-col>
        </el-row>
        <div class="routes-box full">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { routerMap, breadMap } from '../utils/config.js'

export default {
  data () {
    return {
      routerMap,
      breadMap
    }
  },

  mounted () {
    console.log(this.$router)
  }
}
</script>


<style lang=scss>
.admin-route-box {
  width: 100%;
  height: 100%;
}

.main-header-box {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  background-color: #474747;
  user-select: none;

  .title {
    color: #ffffff;
    font-size: 22px;
    height: 100%;
    background-color: #3b3b3b;
    cursor: pointer;

    &:hover {
      background-color: #2e2e2e;
    }

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  .logout-box {
    cursor: pointer;
  }
}

.bread-menu-box {
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 0 10px;
}

.routes-box {
  box-sizing: border-box;
  padding: 15px;
}
</style>
