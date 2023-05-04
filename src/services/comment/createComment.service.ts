import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entitie";
import { Comments } from "../../entities/comments.entitie";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";
import { ICommentRequest } from "../../interfaces/comments.interface";


export const createCommentService = async (
    description: string,
    userId: string,
    carId: string
): Promise<ICommentRequest> => {

    const commentRepository = AppDataSource.getRepository(Comments);
    const userRepository = AppDataSource.getRepository(User);
    const carRepository = AppDataSource.getRepository(Car);

    const findUser = await userRepository.findOneBy({ id: userId });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    const findCar = await carRepository.findOneBy({ id: carId });

    if (!findCar) {
        throw new AppError("Car not found", 404);
    }

    const createComment = commentRepository.create({
        description,
        user: findUser,
        car: findCar,
    });


    console.log(description);

    const comment = await commentRepository.save(createComment)
    // console.log(comment);

    return comment;
};