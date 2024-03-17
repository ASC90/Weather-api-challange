import { useEffect, useState } from "react";
import "./ToggleSort.styled.css";
import { SortTypes } from "../utils/types.utils";
import { SortingArrowsIcon } from "../Icons/SortingArrowsIcon";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import { ArrowUpIcon } from "../Icons/ArrowUpIcon";

export const ToggleSort = ({
  name,
  resetSortType,
  sortType,
}: {
  name?: string;
  resetSortType?: boolean;
  sortType?: (value: string) => void;
}) => {
  const [sortCount, setSortCount] = useState(0);
  const [currentSort, setCurrentSort] = useState(SortTypes[sortCount]);
  const renderIcon = (sortType: string) => {
    switch (sortType) {
      case SortTypes[0]:
        return <SortingArrowsIcon />;
      case SortTypes[1]:
        return <ArrowDownIcon />;
      case SortTypes[2]:
        return <ArrowUpIcon />;
      default:
        return <SortingArrowsIcon />;
    }
  };
  useEffect(() => {
    if (resetSortType) {
      setSortCount(0);
      setCurrentSort(SortTypes[0]);
    }
  }, [resetSortType]);

  return (
    <a
      className="toggle-sort"
      onClick={() => {
        setSortCount(sortCount < SortTypes.length - 1 ? sortCount + 1 : 0);
        setCurrentSort(
          SortTypes[sortCount < SortTypes.length - 1 ? sortCount + 1 : 0]
        );
        sortType &&
          sortType(
            SortTypes[sortCount < SortTypes.length - 1 ? sortCount + 1 : 0]
          );
      }}
    >
      <h5>{name}</h5>
      {renderIcon(currentSort)}
    </a>
  );
};
