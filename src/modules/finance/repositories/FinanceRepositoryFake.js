class FinanceRepositoryFake {
  async add(data) {
    const dataFormated = {
      id: 'any_id',
      ...data,
    };
    return dataFormated;
  }
}

module.exports = FinanceRepositoryFake;
