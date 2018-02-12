/**
 * @author freshzxf
 * @repo https://github.com/stoneWeb/elm-react-native
 */

import React, {Component} from 'react'
import {
    Platform,
    AppRegistry,
    Navigator,
    StatusBar, //APP状态栏组件
    View,
} from 'react-native'
import Wrapper from './component/Wrapper'
//import Events from './util/event'

export default class Navigation extends Component {

    /*继承*/
    constructor(props) {
        super(props)
    }

    /*定义切换路由的场景动画（参数有“路由”，“路由栈”，返回值为 动画效果）
    * 参考文献：https://www.jianshu.com/p/91fa0f34895e
    * */
    configureScene(route, routeStack) {
        switch (route.type) {
            case "Bottom":
                return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
                break;
            case "Right":
                return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
                break;
            default:
                return Navigator.SceneConfigs.FloatFromRight //默认从右侧浮出（淡入）
        }
    }

    /*参数有“路由”，“导航器”，返回值为 {XML} 页面*/
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    /*渲染*/
    render() {

        return Platform.OS == "ios" ? (
            <Navigator
                initialRoute={{component: Wrapper}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                }
                }
            />
        ) : (
            <View style={{flex: 1}}>
                <StatusBar
                    translucent={false} //默认即为“非沉浸式”状态栏
                    backgroundColor="#e62129" //状态栏背景
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={{component: Wrapper}} /*初始化路由(initialRoute)，初始化后，组件会有this.props.navigator属性*/
                    type="Right"
                    configureScene={this.configureScene} /*配置场景动画(configureScene)*/
                    renderScene={this.renderScene} /*渲染场景动画*/
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('Elm', () => Navigation);