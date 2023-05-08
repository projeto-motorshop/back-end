import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { Image } from "../../entities/image.entitie";
import AppError from "../../errors/appError";
import { IImagesUpdate } from "./../../interfaces/cars.intercafe";

export const updateImagesCarService = async (
    data: IImagesUpdate,
    carID: string
) => {
    const imageRepository = AppDataSource.getRepository(Image);
    const carRepository = AppDataSource.getRepository(Car);

    const findCar = await carRepository
        .createQueryBuilder("car")
        .leftJoinAndSelect("car.images", "images")
        .select(["car", "images"])
        .where("car.id = :id", { id: carID })
        .getOne();

    if (!findCar) {
        throw new AppError("Car ID not found", 404);
    }

    const imagesResquest = data.images;
    const imagesCar = findCar.images;
    console.log("TESTE", imagesCar);

    for (let i = 0; i < imagesResquest.length; i++) {
        const findImage = await imageRepository
            .createQueryBuilder("image")
            .select(["image"])
            .where("image.id = :id", { id: imagesCar[i].id })
            .getOne();

        await imageRepository.update(imagesCar[i].id, {
            ...findImage,
            ...imagesResquest[i],
        });
    }

    return { message: "Imagens Atualizadas" };
};
