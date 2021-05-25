'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('manufacturers', [
      { name: 'August Storck KG', country: 'DE' },
      { name: 'Cadbury', country: 'UK' },
      { name: 'Ferrara Candy Company', country: 'US' },
      { name: 'G.B. Ambrosoli', country: 'IT' },
      { name: 'Impact Confections', country: 'US' },
      { name: 'Mars', country: 'US' },
      { name: 'Nabisco', country: 'US' },
      { name: 'Necco', country: 'US' },
      { name: 'Nestlé', country: 'CH' },
      { name: 'Perfetti Van Melle', country: 'IT' },
      { name: 'Just Born, Inc', country: 'US' },
      { name: 'The Hershey Company', country: 'US' },
      { name: 'The Wrigley Company', country: 'US' },
      { name: 'Tootsie Roll Industries', country: 'US' },
      { name: 'Topps', country: 'US' },
      { name: 'Zeta Espacial S.A.', country: 'ES' }
    ])

    return queryInterface.bulkInsert('products', [
      { name: 'Mamba', yearIntroduced: '1953-01-01', manufacturerId: '1' }

    ])
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('candies')
  }
}
