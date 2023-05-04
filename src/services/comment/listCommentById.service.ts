import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entitie";

const listCommentsByIdService = async (commentID: string) => {
    const CommentRepository = AppDataSource.getRepository(Comments);

    const findComment = await CommentRepository
        .createQueryBuilder("comments")
        .leftJoinAndSelect('comments.car', 'car')
        .leftJoinAndSelect('comments.user', 'user')
        .select([
            'comments',
            'car.id',
            'user.id'
        ]).where('comments.id = :id ', { id: commentID })
        .getOne();

    return findComment;
};

export { listCommentsByIdService };

