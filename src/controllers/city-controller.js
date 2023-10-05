const { CityService } = require('../services/index');

const cityService = new CityService();
/*POST -> req.body*/
const create =  async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message:"Successfully Created a City",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to create a city",
            err: error 
        });
    }

    
};
const destroy =  async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message:"Successfully deleted a City",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to delete a city",
            err: error 
        });
        
        
    }
    
};
//PATCH->/city/:id-> req.body
const update =  async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated the city",
            err: error
        });     
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to update the city",
            err: error 
        }); 
    }
    
};
//GET->/city/:id
const get =  async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message:"Successfully fetched a City",
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to get the city",
            err: error 
        });
        
    }
    
}

const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message:"Successfully fetched all Cities",
            err: {}
        });
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to fetch the cities",
            err: error 
        });
        
        
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}