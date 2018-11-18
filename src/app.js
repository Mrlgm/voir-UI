import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsNav from './tabs-nav'
import TabsItem from './tabs-item'
import TabsContent from './tabs-content'
import TabsPane from './tabs-pane'

Vue.component('vi-button', Button)
Vue.component('vi-icon', Icon)
Vue.component('vi-button-group', ButtonGroup)
Vue.component('vi-input', Input)
Vue.component('vi-row', Row)
Vue.component('vi-col', Col)
Vue.component('vi-layout', Layout)
Vue.component('vi-header', Header)
Vue.component('vi-content', Content)
Vue.component('vi-footer', Footer)
Vue.component('vi-sider', Sider)
Vue.component('vi-toast', Toast)
Vue.use(Plugin)
Vue.component('vi-tabs', Tabs)
Vue.component('vi-tabs-nav', TabsNav)
Vue.component('vi-tabs-item', TabsItem)
Vue.component('vi-tabs-content', TabsContent)
Vue.component('vi-tabs-pane', TabsPane)


new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: true,
        message: 'hi'
    },
    created() {
        this.$toast('我是 message', {
            position: 'middle',
            autoCloseDelay: 50
        })
    },
    methods: {
        showToast1() {
            this.$toast('我是 message', {
                position: 'top'
            })
        },
        showToast2() {
            this.$toast('我是 message', {
                position: 'middle'
            })
        },
        showToast3() {
            this.$toast('我是 message', {
                position: 'bottom'
            })
        }
    }
})