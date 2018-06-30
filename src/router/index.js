import Vue from 'vue'
import Router from 'vue-router'
import Channel  from '@/components/channel/channelDay'
import  Home from '@/components/Home'
import  Count from '@/components/count'
import AnnounceByDay from '@/components/BusinessHall/AnnounceByDay'
import FillUp from '@/components/file_up/file'
import Self from '@/components/self/selfDay'
import Test from '@/components/echarts/test'
import ChannelSum from '@/components/echarts/channel'
import ChannelManger from  '@/components/echarts/channelManger'
import ChannelMangerBtz from  '@/components/echarts/channelMangerBtz'
import All from  '@/components/echarts/all'
import BEveryNewadd from  '@/components/echarts/bEveryNewadd'
import BEveryBtz from  '@/components/echarts/bEveryBtz'
import Customer from '@/components/self/customer'
import ChannelTop10 from  '@/components/echarts/channelTop10'
import ChannelTop10M from  '@/components/echarts/channelTop10M'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/Channel', component: Channel, name: 'Channel' },
        { path: '/AnnounceByDay', component: AnnounceByDay, name: 'AnnounceByDay' },
        { path: '/FillUp', component: FillUp, name: 'FillUp' },
        { path: '/self', component: Self, name: 'Self' },
        { path: '/test', component: Test, name: 'Test' },
        { path: '/channelSum', component: ChannelSum, name: 'ChannelSum' },
        { path: '/channelManger', component: ChannelManger, name: 'ChannelManger' },
        { path: '/channelMangerBtz', component: ChannelMangerBtz, name: 'ChannelMangerBtz' },
        { path: '/all', component: All, name: 'All' },
        { path: '/bEveryNewadd', component: BEveryNewadd, name: 'BEveryNewadd' },
        { path: '/bEveryBtz', component: BEveryBtz, name: 'BEveryBtz' },
        { path: '/customer', component: Customer, name: 'Customer' },
        { path: '/channelTop10', component: ChannelTop10, name: 'ChannelTop10' },
        { path: '/channelTop10M', component: ChannelTop10M, name: 'ChannelTop10M' }
      ]
    }

  ]
})
