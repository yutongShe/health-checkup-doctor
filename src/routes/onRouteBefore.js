/**
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
 const onRouteBefore = ({ pathname, meta }) => {
    let isLogin = false
    if (sessionStorage.username !== undefined) {
      isLogin = true;
    }
    // 动态修改页面title
    if (meta.title !== undefined) {
      document.title = meta.title
    }
    // 未登录时拦截相关页面，跳转至登录页
    if (meta.needLogin) {
      if (!isLogin) {
        return '/login'
      }
    }
  }
  
  export default onRouteBefore