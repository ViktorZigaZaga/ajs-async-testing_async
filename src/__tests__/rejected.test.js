import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');

test('rejected', async () => {
  const expected = new Error('Ошибка');
  read.mockRejectedValue(expected);
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toBe(expected);
  }
});
