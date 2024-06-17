'use client'
import Image from "next/image";

interface IAvatar {
    user: string;
}

const Avatar: React.FC<IAvatar> = ({ user }) => {
    let avatarImage: string;

    if (user === "user") {
        avatarImage = "/user.png";
    } else if (user === "bot") {
        avatarImage = "/bot.png";
    } else {
        avatarImage = "/default.png"; // fallback image in case the user is neither "user" nor "bot"
    }

    return (
        <div className="">
            <Image 
                src={avatarImage}
                width={48} // width in pixels
                height={60} // height in pixels
                alt={`${user} avatar`}
                className = "rounded"            
            />
        </div>
    );
};

export default Avatar;
