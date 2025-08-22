# Use Node.js LTS
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json first (better for caching layers)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port Cloud Run will use
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]
