import { useRecords } from "../../context/Records";
import { useRecordsGetList } from "../../hooks/useRecordsGetList";
import Loader from "../Atoms/Loader";
import List from "../Molecules/List";
import CalculationTo from "../Molecules/CalculationTo";
import Select from "../Atoms/Select";
import { recordsMapUsers } from "./../../helpers/mappers";
import {
  calculateUserPointsPerMonth,
  calcTotalPoints,
} from "./../../helpers/calculate";
import { useMemo } from "react";
import styles from "./Home.module.css";
import Error from "../Atoms/Error";

const Home = () => {
  const { data, loading, error } = useRecordsGetList();
  const { currentUser, setCurrentUser } = useRecords();
  const userPointsPerMonth = useMemo(
    () => calculateUserPointsPerMonth(data, currentUser),
    [data, currentUser]
  );

  if (error) {
    return <Error />;
  }

  const usersCollection = recordsMapUsers(data);
  const totalPoints = calcTotalPoints(userPointsPerMonth);

  // in commerce / regular project I would use RHF to handle any form, but here I think that the task aim is to show ability to write own solutions
  const handleChangeUser = (event) => {
    const user = event?.target?.value;
    setCurrentUser(user ? user : null);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <h3>Given records:</h3>
      <List collection={data} />
      <Select
        label="Select user to calculate"
        options={usersCollection}
        onChange={handleChangeUser}
      />
      <CalculationTo user={currentUser} />
      {currentUser && (
        <>
          <h3>Points per months:</h3>
          <List collection={userPointsPerMonth} />
          <div className={styles.total}>Total points: {totalPoints}</div>
        </>
      )}
    </div>
  );
};

export default Home;
