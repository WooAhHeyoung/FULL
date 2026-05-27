import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeout: 180_000, // reasoning 모델 분석이 1~2분 걸릴 수 있어 넉넉히 설정
});
