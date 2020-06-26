const dlc = require('../seeder/generateDlc');
const generateDlc = dlc.generateDlc;
const randomizeArr = dlc.randomizeArr;

test('randomizes an array', () => {
  let arr1 = [1, 2, 3, 4];
  let arr2 = randomizeArr([1, 2, 3, 4]);
  expect(arr2).not.toEqual(arr1);
});
describe('test generateDlc functionality', () => {
  test('generates an array of n dlcs for a given game_id', () => {
    let results = generateDlc(1, 5);
    expect(results.length).toEqual(5);
  });

  test('increments dlcId after successive function calls', () => {
    //sixth dlc
    let dlcs_1 = generateDlc(1, 1);
    //7th and 8th dlc
    let dlcs_2 = generateDlc(2, 2);
    expect(dlcs_1[0].dlcId).toBe(6);
    expect(dlcs_2[1].dlcId).toBe(8);
  });

  test('contains all the proper fields of a dlc object', () => {
    let dlc_arr = generateDlc(3, 3);
    dlc_arr.forEach((dlc, idx) => {
      expect(dlc.associatedGameId).toBe(3);
      expect(dlc.dlcId).toBe(idx + 9);
      expect(dlc.title).toEqual(expect.any(String));
      expect(dlc.dlcPrice).toEqual(expect.any(Number));
      expect(dlc.discountRate).toEqual(expect.any(Number));
      expect(dlc.releaseDate).toEqual(expect.any(String));
      expect(dlc.totalReviews).toEqual(expect.any(Number));
      expect(dlc.review_summary).toEqual(expect.any(String));
      expect(dlc.userTags).toEqual(expect.any(Array));
      expect(dlc.previews).toEqual(expect.any(Array));
    })
  })
});
