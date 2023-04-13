import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { Image } from "../../entities/image.entitie";
import { User } from "../../entities/user.entitie";
import { ICarsRequest } from "../../interfaces/cars.intercafe";

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
        images: images
    });

    await carRepository.save(createCar);


    for (let i = 0; i < images.length; i++) {
        const createImg = images[i]
        const newImage = imgRepository.create({
            ...createImg,
            car: createCar
        })

        await imgRepository.save(newImage)

    }

    console.log(createCar);


    // const respCar = await respCarSchema.validate(createCar, {
    //     stripUnknown: true,
    // });

    return createCar;
};

export { createCarService };

