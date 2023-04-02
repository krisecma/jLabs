import styles from "./ListItem.module.css";

const ListItem = ({ item, asHeader }) => {
  const style = `${styles.row} ${asHeader ? styles.header : ""}`;
  let itemCollection = [];
  for (const key in item) {
    itemCollection.push(
      <div key={key} className={styles.cell}>
        {asHeader ? key : item[key]}
      </div>
    );
  }
  return <div className={style}>{itemCollection}</div>;
};

export default ListItem;
