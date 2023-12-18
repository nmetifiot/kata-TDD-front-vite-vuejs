import { ref } from 'vue';
import axios from 'axios';
import type { Mocked } from 'vitest';

vi.mock('axios');

export const mockedAxios = axios as Mocked<typeof axios>;


export const mockUseApi = {
  get: mockedAxios.get,
  post: mockedAxios.post,
  del: mockedAxios.delete,
  put: mockedAxios.put,
  patch: mockedAxios.patch,
  invalidateCache: vi.fn(),
  data: ref(),
  error: ref(),
  errorMessage: ref(),
  errorDetails: ref(),
  api: mockedAxios
};

