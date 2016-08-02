var strings = {
  eventView: 'Просмотр События',
  eventList: 'События',
};

// TODO: refactor this to normal localization function
export default function (key) {
  let data = strings[key];
  if (!data) return key;
  return data;
};
