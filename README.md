# Chatbot WebUI

Forked from [mckaywrigley/chatbot-ui (legacy)](https://github.com/mckaywrigley/chatbot-ui/tree/legacy)

## News

- Support OpenAI GPT-4o

## Setup

1. Copy `.env.local.example` to create `.env.local`
1. Set your API key to `OPENAI_API_KEY` in `.env.local`

## Launch

**Docker compose**

```shell
docker compose up -d
```
Open [http://localhost:3000](http://localhost:3000)

## Note

**How to add new model**
- Edit `types/openai.ts`
- 