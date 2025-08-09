import { Pressable, Text, ActivityIndicator, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';


export type ButtonProps = PressableProps & {
    title: string;
    loading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    textClassName?: string;
};

export function Button({
    title,
    loading = false,
    disabled = false,
    variant = 'primary',
    className = '',
    textClassName = '',
    ...props
}: ButtonProps) {
    const base = 'flex-row items-center justify-center px-4 py-2 rounded-lg';
    const variants: Record<typeof variant, string> = {
        primary: 'bg-blue-600 active:bg-blue-700',
        secondary: 'bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600',
        outline: 'border border-blue-600 bg-transparent',
    };
    const textVariants: Record<typeof variant, string> = {
        primary: 'text-white font-semibold',
        secondary: 'text-gray-900 dark:text-gray-100 font-semibold',
        outline: 'text-blue-600 font-semibold',
    };

    return (
        <Pressable
            className={twMerge(base, variants[variant], disabled && 'opacity-50', className)}
            disabled={disabled || loading}
            {...props}>
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? '#fff' : '#2563eb'} />
            ) : (
                <Text className={twMerge('text-base', textVariants[variant], textClassName)}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
}
