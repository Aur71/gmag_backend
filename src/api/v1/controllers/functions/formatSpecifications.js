const formatSpecifications = (products) => {
  const modifiedProducts = products.map((product) => {
    const modifiedSpecs = product.specifications.flatMap((category) =>
      category.specs
        .filter((spec) => spec.showAsFilter)
        .map(({ key, value }) => ({ key, value }))
    );
    return { ...product.toObject(), specifications: modifiedSpecs };
  });

  return modifiedProducts;
};

module.exports = formatSpecifications;

// This function formats the specifications array so that it can be easily used by the frontend and reduces the amount of data it needs to send.
// An object is added to the array only if(showAsFilter === true).
// This objects will be used further for filtering.

// OLD FORMAT
// const specifications = [
//   {
//     category: 'category name',
//     specs: [
//       {
//         showAsFilter: true,
//         key: 'brand',
//         value: 'GTX',
//       },
//     ],
//   },
// ];

// NEW FORMAT
// const specifications = [
//   {
//     showAsFilter: true,
//     key: 'brand',
//     value: 'GTX',
//   },
// ];
