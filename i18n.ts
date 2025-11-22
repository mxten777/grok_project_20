import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import ko from './src/messages/ko.json';
import en from './src/messages/en.json';
import ja from './src/messages/ja.json';
import zh from './src/messages/zh.json';

const messages = { ko, en, ja, zh };

export const locales = ['ko', 'en', 'ja', 'zh'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale: locale as string,
    messages: messages[locale as Locale]
  };
});