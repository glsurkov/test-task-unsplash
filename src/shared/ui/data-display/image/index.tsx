import clsx from 'clsx';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export const Image = ({ src, alt, className, ...props }: ImageProps) => {
    return <img src={src} alt={alt} className={clsx(className)} {...props} />;
};
