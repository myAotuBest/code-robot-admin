/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-06-26 21:25:11
 * @LastEditors: Roy
 * @LastEditTime: 2021-07-14 18:18:11
 * @Deprecated: 否
 * @FilePath: /vue-antd-admin/mock/sys/menu.ts
 */
import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Welcome',
  component: '/dashboard/analysis/index',
  meta: {
    title: 'routes.dashboard.analysis',
    affix: true,
    icon: 'bx:bx-home',
  },
};

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      if (!id || id === '1') {
        //权限
        return resultSuccess([dashboardRoute]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute]);
      }
    },
  },
] as MockMethod[];
