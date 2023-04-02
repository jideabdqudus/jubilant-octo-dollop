// @ts-nocheck
import { handleStructuredData, handleSEO } from "../utils";
import { dataset } from "../mock-data";

describe("utility functions", () => {
  describe("handleStructuredData", () => {
    const value = handleStructuredData(
      dataset.authors[0].name,
      dataset.products
    );

    it("should return correct structured data", () => {
      expect(value["@type"]).toEqual("ItemList");
      expect(value.itemListElement.length).toBeGreaterThan(0);
      expect(value.itemListElement[0]["@type"]).toEqual("ListItem");
      expect(value.itemListElement[0].item["@type"]).toEqual("Product");
      expect(value.itemListElement[0].item.review["@type"]).toEqual("Review");
    });

    it("should return correct pros and cons structured data", () => {
      const { negativeNotes, positiveNotes } =
        value.itemListElement[0].item.review;

      [positiveNotes, negativeNotes].forEach((list) => {
        expect(list["@type"]).toEqual("ItemList");
        expect(list["@type"]).toEqual("ItemList");
        expect(list.itemListElement[0]["@type"]).toEqual("ListItem");
        expect(Array.isArray(list.itemListElement)).toBe(true);
        expect(typeof list.itemListElement[0].position).toEqual("string");
        expect(typeof list.itemListElement[0].name).toEqual("string");
      });
    });
  });

  describe("handleSEO", () => {
    const value = handleSEO(dataset);
    it("should return data structure script", () => {
      const { structuredData } = value;
      expect(typeof structuredData).toEqual("object");
    });
  });
});
