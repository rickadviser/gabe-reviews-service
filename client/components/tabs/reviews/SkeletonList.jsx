import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonList = () => (
  <div style={{ background: '#fff', padding: 24, marginTop: 30 }}>
    <div
      style={{
        marginTop: 10,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridGap: '2em',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Skeleton circle height={50} width={50} />
      <Skeleton height={20} />
    </div>
    <div style={{ marginTop: 10 }}>
      <Skeleton height={20} />
    </div>
    <div style={{ marginTop: 10 }}>
      <Skeleton height={20} />
    </div>
    <div style={{ marginTop: 10 }}>
      <Skeleton height={20} />
    </div>
    <div style={{ marginTop: 10 }}>
      <Skeleton height={20} />
    </div>
  </div>
);

export default SkeletonList;
