import styles from "./SearchBar.module.css";
import { TbSearch } from "react-icons/tb";
const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-bar__input-group"]}>
        <TbSearch className={styles["search-bar__icon"]} />
        <input
          type="text"
          className={styles["search-bar__input"]}
          placeholder="جستجو  کالا"
        />
      </div>
      <div className={styles["profile-card"]}>
        <div className={styles["profile-card__wrapper"]}>
          <div className={styles["profile-card__avatar"]}>
            <img src="src/assets/images/manager.webp" alt="Profile image" />
          </div>
          <div className={styles["profile-card__details"]}>
            <h2
              className={styles["profile-card__name"]}
              text-dynamic="میلاد عظمی"
            >
              میلاد عظمی
            </h2>
            <p className={styles["profile-card__role"]} text-dynamic="مدیر">
              مدیر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
