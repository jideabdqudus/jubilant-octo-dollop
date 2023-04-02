import {
  Product,
  Data as DataType,
  ProductData,
  SEOData as SEODataType,
} from "../type.d";

/**
 * It takes an array of strings and returns an array of objects
 * @param {string[]} prosCons - string[] - this is an array of strings that will be used to create the
 * pros and cons list.
 */
const handleProsCons = (prosCons: string[]) => {
  return prosCons.map((title, index) => ({
    "@type": "ListItem",
    position: `${index + 1}`,
    name: title,
  }));
};

/**
 * It takes in an author and a list of products, and returns a structured data object that can be
 * used to generate a rich snippet
 * @param {string} author - string - The author of the review
 * @param {Product[]} products - Product[] - this is an array of products that you want to display on
 * the page.
 * @returns An object with the following properties:
 * - @context: https://schema.org
 * - @type: ItemList
 * - itemListElement: An array of objects with the following properties:
 *   - @type: ListItem
 *   - position: A string with the index of the product + 1
 *   - item: An object with the following properties:
 *     - @type
 */
export const handleStructuredData = (author: string, products: Product[]) => {
  const PRODUCTS_LIST = products.map((product) => product.data);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS_LIST.map(
      (product: ProductData, index: number) => ({
        "@type": "ListItem",
        position: `${index + 1}`,
        item: {
          "@type": "Product",
          url: product.vendorLink,
          name: product.title,
          image: product.image.data.url,
          review: {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: author,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: product.rating,
            },
            positiveNotes: {
              "@type": "ItemList",
              itemListElement: handleProsCons(product.information.pros.pros),
            },
            negativeNotes: {
              "@type": "ItemList",
              itemListElement: handleProsCons(product.information.cons.cons),
            },
          },
        },
      })
    ),
  };
};

/**
 * It returns an object with the title, products, structuredData, head, and subTitle
 * @returns an object with the following properties:
 *   title: The title of the collection
 *   products: An array of products that are part of the collection
 *   structuredData: A function that returns structured data for the collection
 */
export const handleSEO = (data: DataType | SEODataType) => {
  const { authors, products } = data;
  return {
    structuredData: handleStructuredData(authors[0].name, products),
  };
};
