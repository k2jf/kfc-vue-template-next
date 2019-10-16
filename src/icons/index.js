import Vue from 'vue'
import SvgIcon from '@/components/svg-icon'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContent => requireContent.keys().map(requireContent)

const req = require.context('./svg', false, /\.svg$/)

console.log(req)
console.log(req.keys())

requireAll(req)
