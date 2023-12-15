import {ref} from 'vue';
import axios from 'axios';
import {vi} from 'vitest';

vi.mock('axios');

export const mockedAxios = axios as vi.Mocked<typeof axios>;


const mockUseApi = {
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

export const useApi = vi.fn().mockReturnValue(mockUseApi);
