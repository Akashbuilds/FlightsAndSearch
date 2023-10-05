const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something Went Wrong in the Repository Layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something Went Wrong in the Repository Layer");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      //this approach returns an array but not the updated object
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      // return city;
      //this approach will return the updated object
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something Went Wrong in the Repository Layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something Went Wrong in the Repository Layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
