import React, { useEffect, useMemo, useRef } from 'react';
import { ProTable } from '@/components/ProTable';

export default function Page() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
    },
    {
      title: '大小',
      dataIndex: 'size',
    },
    {
      title: '所有者',
      dataIndex: 'owner',
    },
    {
      title: '更新日期',
      dataIndex: 'updateTime',
    },
  ];
  const data = useMemo(() => {
    const $data = [];
    for (let i = 0; i < 46; i += 1) {
      $data.push({
        key: `${i}`,
        name: `设计文档${i}`,
        nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
        size: '34KB',
        owner: 'Zoey Edwards',
        updateTime: '2020-01-26 11:01',
        avatarBg: 'light-blue',
      });
    }
    return $data;
  }, []);
  return <ProTable columns={columns} dataSource={data} ref={ref} />;
}
