import GameSavingLoader from '../gameSavingLoader';

test('correct promise', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const data = await GameSavingLoader.load();
  expect(data).toEqual(expected);
});
