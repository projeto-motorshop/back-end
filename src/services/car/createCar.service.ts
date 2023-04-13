import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { Image } from "../../entities/image.entitie";
import { User } from "../../entities/user.entitie";
import { ICarsRequest } from "../../interfaces/cars.intercafe";
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
        images,
    }: ICarsRequest,
    userID: string

) => {
    const userRepository = AppDataSource.getRepository(User);
    const carRepository = AppDataSource.getRepository(Car);
    const imgRepository = AppDataSource.getRepository(Image)

    const findUser = await userRepository.findOneBy({ id: userID });


    const createImg = images.forEach((el) => imgRepository.create({ urlImg: el.urlImg }))
    console.log(createImg);

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

