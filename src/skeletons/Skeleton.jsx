import styles from "./Skeleton.module.css"
const Skeleton = ({ width = "100%", height = "1em", isCircle = false }) => {
  return (
  <div
    className={styles.skeleton}
    style={{
      width,
      height,
      borderRadius: isCircle ? "50%" : "4px",
    }}
  />
  )
}

export default Skeleton