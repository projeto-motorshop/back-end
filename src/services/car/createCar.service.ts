import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { User } from "../../entities/user.entitie";
import { ICarsRequest, ICarsResponse } from "../../interfaces/cars.intercafe";
import { respCarSchema } from "../../schemas/car.schema";

const createCarService = async (
    {
        brand,
        model,
        year,
        fuel,
        mileage,
        price,
        priceFipe,
        frontImg,
        description,
    }: ICarsRequest,
    userID: string
) => {
    const userRepository = AppDataSource.getRepository(User);
    const carRepository = AppDataSource.getRepository(Car);

    const findUser = await userRepository.findOneBy({ id: userID });

    const createCar = carRepository.create({
        brand: brand,
        model: model,
        year: year,
        fuel: fuel,
        mileage: mileage,
        price: price,
        priceFipe: priceFipe,
        frontImg: frontImg,
        description: description,
        user: findUser,
    });

    await carRepository.save(createCar);

    const respCar = await respCarSchema.validate(createCar, {
        stripUnknown: true,
    });

    return respCar;
};

export { createCarService };
