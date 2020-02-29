
import Counter from '@/components/Counter'
import {expect} from 'chai'
import {mount} from '@vue/test-utils'

describe('测试Counter组件',()=>{
    it('组件点击按钮能否加1',()=>{
        let wrapper= mount(Counter)

        // 先判断默认的 count 值是否等于 10 , find获取元素也可以使用id 类似于jquery
        expect(wrapper.find('#count').text()).to.be.equal('10')

        // 按钮自动点击一次，这里trigger没触发 有待考究。。。。
        wrapper.find('button').trigger('click')

        //判断点击后是否等11
        expect(wrapper.find('#count').text()).to.be.equal('11')
    })
})

// 可以使用原生vue挂载方式，调用实例中increment方法，测试可以通过
//这里获取的是属性中的10 所以是数值10，上面获取元素中的值所以是字符串 '10'

// import Vue from 'vue'
// import Counter from '@/components/Counter'
// import {expect} from 'chai'
// describe('测试Counter组件', () => {
//     it('组件点击按钮能否加1', () => {
//
//         const vmComponent = new Vue(Counter).$mount();
//
//         expect(vmComponent.count).to.be.equal(10)
//
//         // 调用实例中的increment方法，点击计数器
//         vmComponent.increment();
//
//          expect(vmComponent.count).to.be.equal(11)
//     })
// })