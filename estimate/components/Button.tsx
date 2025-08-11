import { Pressable, Text, ActivityIndicator, PressableProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Ionicons } from '@expo/vector-icons';

export type ButtonProps = PressableProps & {
    title: string;
    loading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    textClassName?: string;
    icon?: React.ComponentProps<typeof Ionicons>['name'];
    iconPosition?: 'left' | 'right';
    iconSize?: number;
    iconColor?: string;
    size?: 'sm' | 'md' | 'lg';
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

export function Button({
    title,
    loading = false,
    disabled = false,
    variant = 'primary',
    className = '',
    textClassName = '',
    icon,
    iconPosition = 'left',
    iconSize = 20,
    iconColor,
    size = 'md',
    ...props
}: ButtonProps) {
    // Use #ff6347 as primary, fallback to tailwind if needed
    const base = 'flex-row items-center justify-center rounded-lg';
    const variants: Record<typeof variant, string> = {
        primary: 'bg-[#ff6347] active:bg-[#e5533d]',
        secondary: 'bg-gray-200 active:bg-gray-300 dark:bg-gray-700 dark:active:bg-gray-600',
        outline: 'border border-[#ff6347] bg-transparent',
    };
    const textVariants: Record<typeof variant, string> = {
        primary: 'text-white font-semibold',
        secondary: 'text-gray-900 dark:text-gray-100 font-semibold',
        outline: 'text-[#ff6347] font-semibold',
    };

    return (
        <Pressable
            className={twMerge(base, sizeStyles[size], variants[variant], disabled && 'opacity-50', className)}
            disabled={disabled || loading}
            accessibilityRole="button"
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? '#fff' : '#ff6347'} />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <Ionicons
                            name={icon}
                            size={iconSize}
                            color={iconColor || (variant === 'primary' ? '#fff' : '#ff6347')}
                            style={{ marginRight: 8 }}
                            accessibilityElementsHidden
                            importantForAccessibility="no"
                        />
                    )}
                    <Text className={twMerge('text-base', textVariants[variant], textClassName)}>
                        {title}
                    </Text>
                    {icon && iconPosition === 'right' && (
                        <Ionicons
                            name={icon}
                            size={iconSize}
                            color={iconColor || (variant === 'primary' ? '#fff' : '#ff6347')}
                            style={{ marginLeft: 8 }}
                            accessibilityElementsHidden
                            importantForAccessibility="no"
                        />
                    )}
                </>
            )}
        </Pressable>
    );
}

Button.displayName = 'Button';

