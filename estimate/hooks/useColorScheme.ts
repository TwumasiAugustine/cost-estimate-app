import { useColorScheme as _useColorScheme } from 'react-native';

/**
 * Returns the current color scheme ('light' | 'dark').
 * Falls back to 'light' if not available.
 */
export function useColorScheme(): 'light' | 'dark' {
    const scheme = _useColorScheme();
    return scheme === 'dark' ? 'dark' : 'light';
}
