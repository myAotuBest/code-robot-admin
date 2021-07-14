/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-06-26 21:25:11
 * @LastEditors: Roy
 * @LastEditTime: 2021-07-14 18:23:10
 * @Deprecated: 否
 * @FilePath: /vue-antd-admin/src/views/demo/page/list/card/data.tsx
 */
export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 12; i++) {
    result.push({
      title: 'Roy Admin',
      icon: 'logos:vue',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    });
  }
  return result;
})();
