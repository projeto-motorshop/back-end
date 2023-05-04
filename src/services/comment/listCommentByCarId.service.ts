import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entitie";

const listCommentsByCarIdService = async (carID: string) => {
    const CommentRepository = AppDataSource.getRepository(Comments);

    const findComments = await CommentRepository
        .createQueryBuilder("comments")
        .leftJoinAndSelect("comments.car", "car")
        .leftJoinAndSelect("comments.user", "user")
        .select([
            "comments",
            "car",
            'user'
        ])
        .where("car.id = :id", { id: carID })
        .getMany();

    return findComments;
};

export { listCommentsByCarIdService };

