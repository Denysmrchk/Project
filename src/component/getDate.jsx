const GetDate = (days) => {
  var currentDate = new Date(); // Получаем текущую дату
  var newDate = new Date(currentDate); // Создаем новую дату, чтобы избежать изменения текущей
  newDate.setDate(currentDate.getDate() + (days > 0 ? days : null));
  return <div>{newDate.toLocaleDateString()}</div>;
};

export default GetDate;
