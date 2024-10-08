import { Button } from '@/components/ui/button';
import Link from 'next/link';

const InfoBox = ({
    heading,
    backgroundColor = 'bg-slate-100',
    textColor = 'text-slate-800',
    buttonText,
    buttonLink,
    buttonClassName,
    children,
}) => {
    return (
        <div className={`${backgroundColor} p-6 rounded-lg shadow-sm`}>
            <h2 className={`${textColor} text-2xl font-bold mb-2`}>
                {heading}
            </h2>
            <p className={`${textColor} mb-4`}>{children}</p>
            <Button asChild className={buttonClassName}>
                <Link href={buttonLink}>{buttonText}</Link>
            </Button>
        </div>
    );
};

export default InfoBox;
