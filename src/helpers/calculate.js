export function calculateUserPointsPerMonth(data, currentUser) {
  if (!(data || currentUser)) {
    return [];
  }

  try {
    const userRecords = data.filter((item) => item.user === currentUser);
    if (!userRecords.length > 0) {
      return [];
    }
    const userRecordsDateWithPoints = userRecords.map((item) => ({
      ...item,
      date: new Date(item.date),
      points: calcPointsByValue(item.value),
    }));
    let pointsPerMonthCollection = [];
    let index = 1;
    for (const item of userRecordsDateWithPoints) {
      const year = item.date.getFullYear();
      const month = item.date.getMonth() + 1;
      const pointsPerMonthIndex = pointsPerMonthCollection.findIndex(
        (item) => item.month === month && item.year === year
      );

      if (pointsPerMonthIndex < 0) {
        pointsPerMonthCollection.push({
          id: index++,
          year: year,
          month: month,
          points: item.points,
        });
      } else {
        pointsPerMonthCollection[pointsPerMonthIndex].points += item.points;
      }
    }
    return pointsPerMonthCollection;
  } catch (error) {
    console.log("Some error in calculateUserPointsPerMonth", error);
    return [];
  }
}

export function calcTotalPoints(pointsPerMonthCollection) {
  if (pointsPerMonthCollection.length === 0) {
    return 0;
  }
  return pointsPerMonthCollection.reduce((acc, curr) => acc + curr.points, 0);
}

export function calcPointsByValue(value) {
  let points = 0;
  if (value > 100) {
    points = (value - 100) * 2;
  }
  if (value > 50) {
    points += value - 50;
  }
  return points;
}
