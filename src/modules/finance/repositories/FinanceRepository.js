const mongo = require('../../../infra/database/mongoose');

class FinanceRepository {
  async add(data) {
    const moviment = await mongo.collection('moviments').insertOne(data);

    const movimentFormated = {
      id: moviment.ops[0]._id,
      ...moviment.ops[0],
    };
    delete movimentFormated._id;

    return movimentFormated;
  }
}

module.exports = FinanceRepository;
