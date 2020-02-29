// 导入测试的功能代码
import  {parser} from "@/code/test_parser";

//从断言库中导入相应的方法
import {expect} from 'chai'

// describe 表示一个分类 不加也行
// it 表示一个测试用例，第一个参数可以写这个测试用例的描述
// 第二个参数是一个函数

describe('专门测试parser',()=>{
    it('第一个测试用例',()=>{
        //expext 期望 ，期望 parser('name=lbj') 是否和 {name:'lbj'} 相等
        //断言都是 to.be ...
        expect(parser('name=lbj')).to.be.deep.equal({name:'lbj'})
    })
})
