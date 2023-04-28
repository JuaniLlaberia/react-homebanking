export const formatMovements = function(date) {

    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

    const daysPassed = calcDaysPassed(new Date(), date);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesturday';
    if (daysPassed <= 7) return `${daysPassed} Days Ago`;
    else {
      return new Intl.DateTimeFormat('en-En').format(date) //without second parameter it will just display the date month and year
    }
};