// 原生vue测试

// import HelloWorld from '@/components/HelloWorld'
// import Vue from 'vue'
// import {expect} from 'chai'
//
// describe('测试HelloWorld组件',()=>{
//     it('组件传值是否正常显示',()=>{
//       //原生vue自己测试
//       // extend 方法可以根据实例创建一个它的基本类
//
//         // 拿到HelloWorld这个组件的基本类
//         let BaseExtend = Vue.extend(HelloWorld)
//         // 把组件进行挂载,并传递个参数值 即{el:'xxx'}
//         let vm=new BaseExtend({
//             propsData:{msg:'lbj'}
//         }).$mount()
//         //获取这个挂载的元素 vm.$el，但是我们在命令行测试 拿不到这个元素
//         //好在 mocha 测试的时候集成了 jsdom ，就可以在node环境下操作dom
//
//         //判断HelloWorld组件中h1标签内部值是否包含上面传递的msg相等
//         expect(vm.$el.querySelector('h1').innerHTML).to.be.contain('lbj')
//
//     })
// })



import HelloWorld from '@/components/HelloWorld'
import {expect} from 'chai'
import {mount} from '@vue/test-utils'

describe('测试HelloWorld组件',()=>{
    it('组件传值是否正常显示',()=>{

       //挂载并传参数
       let wrapper= mount(HelloWorld,{
           propsData:{msg:'lbj'}
       })


      expect(wrapper.find('h1').text()).to.be.contain('lbj')

    })
})






