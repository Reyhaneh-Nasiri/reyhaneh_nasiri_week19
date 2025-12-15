import Skeleton from "./Skeleton";
import styles from "./PaginationSkeleton.module.css";

const PaginationSkeleton = () => {
  return (
    <div className={styles.container}>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Skeleton width={35} height={35} isCircle={true} key={index} />
        ))}
    </div>
  );
};

export default PaginationSkeleton;
