const getDate = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const dayOfTheWeek = weekdays[new Date().getDay()];

  const month = months[new Date().getMonth()];
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const todayDate = `${month} ${day}, ${year}`;

  return [todayDate, dayOfTheWeek];
};

export default getDate;
