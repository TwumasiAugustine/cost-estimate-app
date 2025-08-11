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

// Use Tailwind config colors for icon and text
const iconColors: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: '#fff', // text-white
    secondary: '#8a6a2f', // primary
    outline: '#8a6a2f', // primary
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
    const base = 'flex-row items-center justify-center rounded-lg';
    const variants: Record<typeof variant, string> = {
        primary: 'bg-primary active:bg-primary-dark',
        secondary: 'bg-secondary active:bg-secondary-light',
        outline: 'border border-primary bg-transparent',
    };
    const textVariants: Record<typeof variant, string> = {
        primary: 'text-white font-semibold',
        secondary: 'text-primary font-semibold',
        outline: 'text-primary font-semibold',
    };

    // Use iconColor prop if provided, otherwise use the default for the variant
    const resolvedIconColor = iconColor || iconColors[variant];

    return (
        <Pressable
            className={twMerge(
                base,
                sizeStyles[size],
                variants[variant],
                disabled && 'opacity-50',
                className
            )}
            disabled={disabled || loading}
            accessibilityRole="button"
            {...props}>
            {loading ? (
                <ActivityIndicator color={iconColors[variant]} />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <Ionicons
                            name={icon}
                            size={iconSize}
                            color={resolvedIconColor}
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
                            color={resolvedIconColor}
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
