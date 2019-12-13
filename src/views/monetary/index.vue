<template>
  <div class="container">
    <div>This is Monetary Page</div>
    <div class="map-content">
      <el-amap
        ref="map"
        vid="amapDemo"
        :amap-manager="amapManager"
        :center="center"
        :zoom="zoom"
        :plugin="plugin"
        :events="events"
        class="amap-demo"
      ></el-amap>
    </div>
  </div>
</template>

<script>
import { amapManager } from 'vue-amap'

export default {
  name: 'Monetary',
  data () {
    return {
      amapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: o => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert('map clicked')
        }
      },
      plugin: [
        'ToolBar',
        {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init (o) {
              console.log(o)
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="less" scpoed>
.map-content {
  width: 90%;
  height: 6rem;
}
</style>
