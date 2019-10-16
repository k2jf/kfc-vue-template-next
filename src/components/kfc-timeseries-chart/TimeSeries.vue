<template>
  <div class="chart-container" ref="TimeSeriesChart" />
</template>

<script>
import Echarts from 'echarts'
import { api } from './api'

export default {
  name: 'TimeSeries',
  props: {
    queryParams: {
      type: Object,
      required: false,
      default () {
        return {
          'query': 'select type, ts,wfid,wtid,WTUR_WSpd_Ra_F32,WTUR_Temp_Ra_F32 from gw_scada_7s_extension where ((type=\'gw_scada_7s_extension\' and wfid = \'140604\' and wtid = \'140604006\')) and ts >= \'2019-01-11 00:00:00.000\' and ts <= \'2019-01-11 23:59:59.000\'',
          'resultType': 'REST',
          'path': 'filestore://',
          'queueName': 'default_queue',
          'timeout': 6000
        }
      }
    }
  },
  data () {
    return {
      timeSeriesData: null,
      seriesItem: {
        type: 'line',
        showSymbol: false,
        legendHoverLink: true,
        lineStyle: {
          width: 0.5
        }
      },
      option: {
        title: {
          text: '新疆哈密烟墩大二期整装天润风电场-F084机组',
          textStyle: {
            color: '#666'
          },
          top: 10,
          left: 'center'
        },
        legend: {
          data: [
            'WTUR_Temp_Ra_F32',
            'WTUR_WSpd_Ra_F32'
          ],
          bottom: 0
        },
        toolbox: {
          feature: {
            dataZoom: {},
            restore: {},
            saveAsImage: {}
          }
        },
        tooltip: {},
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false
            },
            min: 'dataMin',
            max: 'dataMax'
          },
          {
            type: 'value',
            splitLine: {
              show: false
            },
            min: 'dataMin',
            max: 'dataMax'
          }
        ]
      }
    }
  },
  watch: {
    timeSeriesData: {
      handler (curVal, oldVal) {
        if (curVal) {
          this.showTimeSeriesChart()
        }
      },
      deep: true
    }
  },
  created () {
    this.getTimeSeriesData()
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化图表
    init () {
      this.timeSeriesChart = Echarts.init(this.$refs.TimeSeriesChart)
      this.timeSeriesChart.showLoading({ text: '加载中...' })
    },
    // 调用接口获取时序数据
    getTimeSeriesData () {
      this.$axios.post(`${api.timeSeries}`, this.queryParams).then(res => {
        this.timeSeriesData = res.data.body.results
      })
    },
    // 时序折线图
    showTimeSeriesChart () {
      let option = {
        ...this.option,
        series: this.getSeriesData()
      }
      this.timeSeriesChart.hideLoading()
      this.timeSeriesChart.setOption(option)
      window.onresize = this.timeSeriesChart.resize
    },
    getSeriesData () {
      let legendData = this.option.legend.data
      let seriesList = []
      legendData.forEach((legendItem, index) => {
        seriesList.push({
          name: legendItem,
          yAxisIndex: index % 2 === 0 ? 0 : 1,
          ...this.seriesItem,
          markLine: {
            data: [{
              name: '平均值',
              type: 'average'
            }],
            symbol: 'circle',
            symbolSize: 2,
            label: {
              show: false
            }
          },
          data: this.getSeriesDataItem(legendItem)
        })
      })
      return seriesList
    },
    getSeriesDataItem (legendItem) {
      const seriesData = this.timeSeriesData.reduce((seriesList, item) => {
        seriesList.push([item.ts, item[legendItem]])
        return seriesList
      }, [])

      return seriesData
    }
  },
  beforDestory () {
    this.timeSeriesChart.clear()
  }
}
</script>

<style lang="css" scoped>
.chart-container {
  width: 100%;
  height: 600px;
}
</style>
