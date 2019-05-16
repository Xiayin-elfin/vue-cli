export default {
    route: (state: any) => state.route, // 获取路由信息
    routePath: (state: any) => state.route.path, // 获取路由的路径
    routeParams: (state: any) => state.route.params, // 获取路由的参数
    routeQuery: (state: any) => state.route.query // 获取路由的query
};
