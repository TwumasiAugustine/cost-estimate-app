import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { twMerge } from 'tailwind-merge';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
    className?: string;
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    className = '',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    const typeClass: Record<NonNullable<ThemedTextProps['type']>, string> = {
        default: 'text-base',
        defaultSemiBold: 'text-base font-semibold',
        title: 'text-3xl font-bold',
        subtitle: 'text-xl font-bold',
        link: 'text-base text-[#0a7ea4] underline',
    };

    return (
        <Text
            style={[{ color }, style]}
            className={twMerge(typeClass[type], className)}
            {...rest}
        />
    );
}
