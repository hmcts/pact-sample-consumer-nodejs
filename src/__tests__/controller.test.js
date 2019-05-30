/**
 * @jest-environment node
 */
const { getData } = require("../controller");
const provider = require("./mock/provider");
const mockedResponse = require("./mock/response-mock");

describe("The API", () => {
  beforeAll(() => provider.setup()); // Create mock provider
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe("The getData api", () => {
    beforeAll(() => {
      provider.addInteraction(mockedResponse);
    });

    it("Returns a sucessful response", async () => {
      const EXPECTED = "Hello";
      const data = await getData();
      expect(data).toEqual(EXPECTED);
    });
  });
});
