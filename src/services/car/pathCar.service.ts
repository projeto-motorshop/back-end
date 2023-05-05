
import AppDataSource from '../../data-source';
import { Car } from '../../entities/car.entitie';
import AppError from './../../errors/appError';
import { ICarsUpdate } from './../../interfaces/cars.intercafe';



export const pathCarService = async (carsData: ICarsUpdate, carsId: string): Promise<ICarsUpdate> => {

    const carsRepo = AppDataSource.getRepository(Car);
    const findcars = await carsRepo.findOneBy({
        id: carsId
    })
    try {
        const updatedCar = {
            ...findcars,
            ...carsData
        }

        await carsRepo.save(updatedCar)
        // const updatedCarValidator = await updateCarSchema.validate(updatedCar, {
        //     stripUnknown: true
        // })



        return updatedCar
    } catch (error: any) {
        throw new AppError(error.message, 400)
    }
}