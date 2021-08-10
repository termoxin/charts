/* eslint-disable class-methods-use-this */
const staticData = [
  { name: 'Аэрофлот', type: 'share', code: 'ARF' },
  { name: 'Apple', type: 'share', code: 'APL' },
  { name: 'Tesla', type: 'share', code: 'TSL' },
  { name: 'Роснефть', type: 'share', code: 'RSN' },
  { name: 'Сбер', type: 'bond', code: 'SBR' },
  { name: 'ФК Открытие', type: 'bond', code: 'FKO' },
  { name: 'Максима Телеком', type: 'bond', code: 'MTK' },
  { name: 'Alibaba', type: 'bond', code: 'ALI' },
  { name: 'Taobao', type: 'bond', code: 'TBO' },
  { name: 'Золото', type: 'metal', code: 'GLD' },
  { name: 'Серебро', type: 'metal', code: 'SLR' },
];

class APIGenerator {
  constructor(data, priceObject) {
    this.staticData = data;
    this.priceObject = priceObject;
  }

  createFakePrices(minLength, maxLength, maxPrice) {
    const pricesLength = Math.floor(Math.random() * (maxLength - minLength) + minLength);
    const valuesArray = [];
    for (let i = 0; i <= pricesLength; i += 1) {
      valuesArray.push({
        price: Math.floor(Math.random() * maxPrice),
      });
    }
    return valuesArray;
  }

  addPricesToData() {
    return this.staticData.map(
      (dataChunk) => Object.assign(dataChunk, {
        values: this.createFakePrices(
          this.priceObject.minLength, this.priceObject.maxLength, this.priceObject.maxPrice,
        ),
      }),
    );
  }

  getAllData() {
    return this.addPricesToData();
  }

  getSinglePiece(code) {
    return Object.assign(this.staticData.find((chunk) => chunk.code === code), {
      values: this.createFakePrices(
        this.priceObject.minLength, this.priceObject.maxLength, this.priceObject.maxPrice,
      ),
    });
  }
}

const fakeApi = new APIGenerator(staticData, {
  minLength: 7,
  maxLength: 7,
  maxPrice: 10000,
});

export default fakeApi;
