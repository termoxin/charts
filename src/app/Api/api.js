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
  constructor(data, delay, priceObject) {
    this.staticData = data;
    this.delay = delay;
    this.priceObject = priceObject;
  }

  createValuesObject() {
    return {
      values: this.createFakePrices(
        this.priceObject.minLength, this.priceObject.maxLength, this.priceObject.maxPrice,
      ),
    };
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
      (dataChunk) => ({ ...dataChunk, ...this.createValuesObject() }),
    );
  }

  getAllData() {
    return new Promise(
      (resolve) => setTimeout(() => resolve(
        this.addPricesToData(),
      ), this.delay),
    );
  }

  getSinglePiece(code) {
    return new Promise(
      (resolve) => setTimeout(() => resolve(
        {
          ...this.staticData.find((chunk) => chunk.code === code), ...this.createValuesObject(),
        },
      ), this.delay),
    );
  }
}

const fakeApi = new APIGenerator(staticData, 1000, {
  minLength: 7,
  maxLength: 7,
  maxPrice: 10000,
});

export default fakeApi;
