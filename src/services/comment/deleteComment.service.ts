import AppDataSource from "../../data-source";
import { Comments } from "../../entities/comments.entitie";

const deleteCommentService = async (commentID: string) => {
    const commentRepository = AppDataSource.getRepository(Comments);

    const findComment = await commentRepository.findOneBy({ id: commentID });

    await commentRepository.remove(findComment);

    return { message: "Deleted comment" };
};

export { deleteCommentService };

