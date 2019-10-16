# TimeSeries

## 功能
用于展示时序图表

## 维护者
youli

## 依赖
npm install --save echarts

## 属性

| 属性        | 说明     | 类型   | 默认值 |
| ----------- | -------- | ------ | ------ |
| queryParams | 请求参数 | Object | -      |

## 示例
```
<template>
    <TimeSeries :queryParams="queryParams" />
</template>

<script>
    import TimeSeries from '@/components/kfc-timeseries-chart'
    components: {
        TimeSeries
    },
    export default {
        data () {
            return {
                queryParams: {
                    'query': "select type, ts,wfid,wtid,WTUR_WSpd_Ra_F32,WTUR_Temp_Ra_F32 from gw_scada_7s_extension where ((type='gw_scada_7s_extension' and wfid = '140604' and wtid = '140604006')) and ts >= '2019-01-11 00:00:00.000' and ts <= '2019-01-11 23:59:59.000'",
                    'resultType': 'REST',
                    'path': 'filestore://',
                    'queueName': 'default_queue',
                    'timeout': 6000
                }
            }
        }
    }
</script>
```
