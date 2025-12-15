import Skeleton from "./Skeleton";
import styles from "./SearchBarSkeleton.module.css";

const SearchBarSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width="100%" height="62px" />
    </div>
  );
};

export default SearchBarSkeleton;
