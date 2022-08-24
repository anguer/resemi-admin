import { forwardRef, useEffect, useState } from 'react';
import type { TableProps } from '@douyinfe/semi-ui/lib/es/table';
import { Table } from '@douyinfe/semi-ui';
import { useRouter } from 'next/router';

export interface ProTableProps extends Omit<TableProps, ''> {}

export const ProTable = forwardRef<Table<any>, ProTableProps>(
  ({ pagination = true, dataSource, ...delegated }: ProTableProps, ref) => {
    const { query, push, route } = useRouter();
    const [pageArgs, setPageArgs] = useState<{ currentPage: number; pageSize: number }>({
      currentPage: 1,
      pageSize: 10,
    });

    useEffect(() => {
      const { page, limit } = query;
      if (!page && !limit) {
        // replace(`${route}?page=${1}&limit=${10}`).then();
        return;
      }

      const currentPage = +page || 1;
      const pageSize = +limit || 10;
      setPageArgs({ currentPage, pageSize });
    }, [query]);

    useEffect(() => {
      console.log('#load data', pageArgs);
    }, [pageArgs]);

    function handlePageChange(page, limit) {
      push(`${route}?page=${page}&limit=${limit}`).then();
    }

    return (
      <Table
        ref={ref}
        dataSource={dataSource}
        pagination={
          pagination && {
            pageSize: pageArgs.pageSize,
            total: dataSource.length,
            currentPage: pageArgs.currentPage,
            onChange: handlePageChange,
          }
        }
        {...delegated}
      />
    );
  },
);
