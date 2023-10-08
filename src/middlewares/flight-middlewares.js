const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        //if the body params are missing we come inside if
        return res.status(400).json({
            data :{},
            success: false,
            message : 'Invalid req body for creating a flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}