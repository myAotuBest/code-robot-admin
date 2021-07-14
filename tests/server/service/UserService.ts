/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-06-26 21:25:11
 * @LastEditors: Roy
 * @LastEditTime: 2021-07-14 18:23:17
 * @Deprecated: 否
 * @FilePath: /vue-antd-admin/tests/server/service/UserService.ts
 */
import { Result } from '../utils';

const fakeUserInfo = {
  userId: '1',
  username: 'Roy',
  realName: 'Roy Admin',
  desc: 'manager',
  password: '123456',
  token: 'fakeToken1',
  roles: [
    {
      roleName: 'Super Admin',
      value: 'super',
    },
  ],
};
export default class UserService {
  async login() {
    return Result.success(fakeUserInfo);
  }

  async getUserInfoById() {
    return Result.success(fakeUserInfo);
  }
}
