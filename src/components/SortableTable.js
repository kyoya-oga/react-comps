import React, { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../hooks/useSort';
import Table from './Table';

function SortableTable(props) {
  const { config, data } = props;
  const { sortedData, sortBy, sortOrder, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div className="">
        <GoArrowSmallUp size={24} />
        <GoArrowSmallDown size={24} />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp size={24} />
        <GoArrowSmallDown size={24} />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp size={24} />
        <GoArrowSmallDown className="invisible" aria-hidden size={24} />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallUp className="invisible" aria-hidden size={24} />
        <GoArrowSmallDown size={24} />
      </div>
    );
  }
};

export default SortableTable;
