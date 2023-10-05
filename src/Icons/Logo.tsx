import { FC } from 'react';

interface LogoType {
    className?: string;
}

const Logo: FC<LogoType> = ({ className }) => {
    return (
        <img
            src="https://user-images.githubusercontent.com/100764935/221164203-5cb627d7-bc6c-4f19-a41b-feee647797db.png"
            title="Alex"
            alt="logo"
            className="w-28 left-0 top-0 rounded-lg"
        />
    );
};

export default Logo;
