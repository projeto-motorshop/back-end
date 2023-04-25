import { randomUUID } from "crypto";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entitie";
import AppError from "../../errors/appError";
import { emailService } from "../../utils/sendEmail";

const sendEmailPasswordRecoveryService = async (
    email: string,
    protocol: string,
    host: string
) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ email: email });

    if (!findUser) {
        throw new AppError("invalid email", 404);
    }

    const resetToken = randomUUID();

    await userRepository.update(findUser.id, {
        resetToken: resetToken,
    });

    const resetPasswordTemplate = emailService.resetPasswordTemplate(
        email,
        findUser.name,
        resetToken,
        protocol,
        host
    );

    await emailService.sendEmail(resetPasswordTemplate);
};

export { sendEmailPasswordRecoveryService };
