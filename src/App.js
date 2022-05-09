import RouterWaiter from 'react-router-waiter' // 引入插件
import routes from './routes/routes' // 引入路由配置
import onRouteBefore from './routes/onRouteBefore' // 引入路由拦截函数

function App () {
  return (
      <RouterWaiter routes={routes} onRouteBefore={onRouteBefore} />
  )
}

export default App;
