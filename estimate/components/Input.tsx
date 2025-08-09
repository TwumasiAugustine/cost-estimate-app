import { forwardRef } from 'react';
import { TextInput, TextInputProps, View, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

export type InputProps = TextInputProps & {
    label?: string;
    error?: string;
    className?: string;
    inputClassName?: string;
};

export const Input = forwardRef<TextInput, InputProps>(
    ({ label, error, className = '', inputClassName = '', ...props }, ref) => {
        return (
            <View className={twMerge('mb-4 w-full', className)}>
                {label && (
                    <Text className="mb-1 text-base font-medium text-gray-700 dark:text-gray-200">
                        {label}
                    </Text>
                )}
                <TextInput
                    ref={ref}
                    className={twMerge(
                        'rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100',
                        error && 'border-red-500',
                        inputClassName
                    )}
                    placeholderTextColor="#9ca3af"
                    {...props}
                />
                {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
            </View>
        );
    }
);

Input.displayName = 'Input';
