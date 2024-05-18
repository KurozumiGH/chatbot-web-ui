import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

// OpenAI Models: https://platform.openai.com/docs/models
export enum OpenAIModelID {
  OPENAI_GPT_35_TURBO = 'gpt-3.5-turbo',
  OPENAI_GPT_4O = 'gpt-4o',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.OPENAI_GPT_4O;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.OPENAI_GPT_35_TURBO]: {
    id: OpenAIModelID.OPENAI_GPT_35_TURBO,
    name: 'OpenAI GPT-3.5 Turbo',
    maxLength: 16385 * 4,
    tokenLimit: 16385,
  },
  [OpenAIModelID.OPENAI_GPT_4O]: {
    id: OpenAIModelID.OPENAI_GPT_4O,
    name: 'OpenAI GPT-4o',
    maxLength: 128000 * 4,
    tokenLimit: 128000,
  },
};
