import styles from "./ErrorBoundaryDisplay.module.css";

const ErrorBoundaryDisplay = ({ errorMessage, onReset }) => {
  return (
    <div className={styles["error-boundary"]} role="alert">
      <div className={styles["error-boundary__icon"]}>⚠️</div>
      <h3 className={styles["error-boundary__title"]}>مشکلی پیش آمده</h3>
      <p className={styles["error-boundary__message"]}>
        متأسفانه در این بخش خطایی رخ داده است.
      </p>

      {import.meta.env.MODE === "development" && errorMessage && (
        <pre className={styles["error-boundary__error"]}>{errorMessage}</pre>
      )}

      {onReset && (
        <button onClick={onReset} className={styles["error-boundary__button"]}>
          تلاش مجدد
        </button>
      )}
    </div>
  );
};

export default ErrorBoundaryDisplay;
