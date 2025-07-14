interface CircleProgressProps {
    size?: number;
    strokeWidth?: number;
    percentage: number;
    color?: string;
    trackColor?: string;
}

export const CircleProgress = ({
    size = 120,
    strokeWidth = 12,
    percentage,
    color = '#3366FF',
    trackColor = '#e6e6ef',
}: CircleProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percentage / 100);

    return (
        <svg width={size} height={size}>
            <circle
                stroke={trackColor}
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        </svg>
    );
};
