import ListItem from "../Atoms/ListItem";

const List = ({ collection }) => {
  const header = collection.length > 0 ? collection.at(0) : null;
  return (
    <div>
      <div>
        <ListItem item={header} asHeader={true} />
      </div>
      {collection.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
