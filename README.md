# Chatbot WebUI

Forked from [mckaywrigley/chatbot-ui (legacy)](https://github.com/mckaywrigley/chatbot-ui/tree/legacy)

## News

- Support OpenAI GPT-4o

## Setup

1. Copy `.env.local.example` to create `.env.local`
1. Set your API key to `OPENAI_API_KEY` in `.env.local`

## Launch

### docker compose

```shell
docker compose up -d
```

Open [http://localhost:3000](http://localhost:3000)

## Note

### How to add new model

1. Edit `types/openai.ts`
1. Also modify `utils/app/clean.ts` as needed (`OpenAIModelID`)

### Change system prompt

1. Edit `utils/app/const.ts` (`DEFAULT_SYSTEM_PROMPT`)
