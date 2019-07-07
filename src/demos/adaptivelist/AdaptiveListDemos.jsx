import React, { useState } from "react";
import AdaptiveList from "react-adaptive-list";
import Tombstone from "./Tombstone";
import styled from "styled-components";

const ListItem = styled.div`
  box-sizing: border-box;
  padding: 15px;
  height: 60px;
  position: absolute;
  width: 100%;
`;

const AdaptiveListStyled = styled(AdaptiveList)`
  height: 100%;
  border: solid 1px #bbb;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  position: relative;
`;

// simple fund to manage data loading scenarios for the list component
// This enables you to vary data page size, loading speed, 'load more'
// styling and total record count (for long lists)
const adaptiveListManager = ({
  initialRowCount = 0,
  isCompleteOnInit = false,
  sideEffectSpeedMs = 2000,
  loadMoreStyle = "loadingindicator",
  pageSize = 5,
  totalRecords = 30
} = {}) => {
  let _id = 0;
  let makeId = func => ++_id && func();
  const itemMock = () =>
    makeId(() => ({
      id: _id,
      title: `Item #${_id}`
    }));

  const initialData = new Array(initialRowCount).fill(0).map(_ => itemMock());

  const handleLoadMore = onItemsReady => {
    window.setTimeout(() => {
      const newItems = new Array(pageSize).fill(0).map(_ => itemMock());
      let completed = _id > totalRecords;
      onItemsReady({ items: newItems, complete: completed });
    }, sideEffectSpeedMs);
  };

  return {
    initialData,
    isCompleteOnInit,
    handleLoadMore,
    loadMoreStyle
  };
};

const largeRowCountListManager = adaptiveListManager({
  initialRowCount: 10000,
  isCompleteOnInit: true,
  pageSize: 3,
  totalRecords: 10000,
  loadMoreStyle: "loadingindicator"
});

const progressiveLoadIndicatorListManager = adaptiveListManager({
  initialRowCount: 0,
  sideEffectSpeedMs: 500,
  pageSize: 3,
  totalRecords: 500,
  loadMoreStyle: "loadingindicator"
});

const progressiveLoadTombstonesListManager = adaptiveListManager({
  initialRowCount: 0,
  sideEffectSpeedMs: 500,
  pageSize: 10,
  totalRecords: 500,
  loadMoreStyle: "tombstones"
});

const AdaptiveListDemo = listManager => (
  <>
    <AdaptiveListStyled
      overscanAmount={20}
      initialData={listManager.initialData}
      isCompleteOnInit={listManager.isCompleteOnInit}
      onLoadMore={listManager.handleLoadMore}
      loadingMoreStyle={listManager.loadMoreStyle}
      rowHeight={60}
      renderRow={({ index, item, computedStyle }) => (
        <ListItem key={index} id={`row${index}`} style={computedStyle}>
          <div>
            <b>{item.title}</b>
          </div>
          <div>List A: More detail</div>
        </ListItem>
      )}
      renderTombstone={({ index, top }) => (
        <Tombstone style={{ top }} key={index} id={`tombstone${index}`} />
      )}
      renderEmptyList={() => <div>Empty</div>}
      renderLoadingMore={computedStyle => <div>Loading more....</div>}
    />
  </>
);

export const AdaptiveListDemoProgressiveLoadTombstones = () => {
  return <>{AdaptiveListDemo(progressiveLoadTombstonesListManager)}</>;
};

export const AdaptiveListDemoProgressiveLoadIndicator = () => {
  return <>{AdaptiveListDemo(progressiveLoadIndicatorListManager)}</>;
};

export const AdaptiveListDemoLargeRowCount = () => {
  return <>{AdaptiveListDemo(largeRowCountListManager)}</>;
};
