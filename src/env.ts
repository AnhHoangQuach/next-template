type EnvType = 'DEV' | 'STG' | 'PROD';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const ENV = (process.env.NEXT_PUBLIC_ENV?.toUpperCase() ?? 'DEV') as EnvType;
