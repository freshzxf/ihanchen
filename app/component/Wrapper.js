/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, {Component} from 'react'
import {Navigator, View} from 'react-native'
import TabView from './TabView'

export default class Wrapper extends Component {
    constructor(props) {
        /* 继承构造函数的所有属性（如：this.props.navigator属性）
        * super()调用会生成一个空对象，作为context来调用父类的constructor，返回this对象，作为子类constructor的context继续调用构造函数。
        * 参考：https://www.cnblogs.com/liutie1030/p/5997446.html
        * */
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                {/*此处必须写上 navigator={this.props.navigator}，因为其他组件需要继承*/}
                <TabView navigator={this.props.navigator}/>
            </View>
        )
    }
}
