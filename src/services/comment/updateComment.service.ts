
import AppDataSource from '../../data-source';
import { Comments } from '../../entities/comments.entitie';
import AppError from '../../errors/appError';
import { ICommentUpdate } from '../../interfaces/comments.interface';
import { updateCommentSchema } from '../../schemas/comment.schema';



export const pathCommentService = async (commentData: ICommentUpdate, commentId: string): Promise<ICommentUpdate> => {

    const commentRepo = AppDataSource.getRepository(Comments);
    const findcomment = await commentRepo.findOneBy({
        id: commentId
    })
    try {
        const updatedComment = {
            ...findcomment,
            ...commentData
        }

        await commentRepo.save(updatedComment)
        const updatedCarValidator = await updateCommentSchema.validate(updatedComment, {
            stripUnknown: true
        })



        return updatedCarValidator
    } catch (error: any) {
        throw new AppError(error.message, 400)
    }
}