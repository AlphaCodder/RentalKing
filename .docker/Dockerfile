FROM oven/bun:1

WORKDIR /app

# Copy package files first for better caching
COPY package*.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

EXPOSE 3000

CMD ["bun", "run", "./bin/www"]
