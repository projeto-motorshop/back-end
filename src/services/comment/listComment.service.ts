import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entitie";
import { ICommentResponse } from "../../interfaces/comments.interface";

const listCommentService = async (): Promise<ICommentResponse[]> => {
    const commentRepository = AppDataSource.getRepository(Comments);
    const comments = await commentRepository
        .createQueryBuilder('comments')
        .leftJoinAndSelect('comments.user', 'user')
        .leftJoinAndSelect('comments.car', 'car')

        .select([
            'comments.id',
            'comments.description',
            'comments.createdAt',
            'comments.updatedAt',
            'car.id',
            'user.id'
        ]).getMany()

    return comments
};

export { listCommentService };

