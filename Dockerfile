# ===============================
# STAGE 1: Build
# ===============================
FROM node:18 AS builder

# Sovelluksen työhakemisto
WORKDIR /app

# Kopioi riippuvuuksien hallinta -tiedostot
COPY package*.json ./

# Asenna riippuvuudet
# (Tailwind, TypeScript jne. asentuvat tässä vaiheessa)
RUN npm ci

# Kopioi muu sovelluskoodi
COPY . .

# Rakenna Next.js-sovellus (luo .next-hakemiston)
RUN npm run build

# ===============================
# STAGE 2: Production
# ===============================
FROM node:18-slim

WORKDIR /app

# Kopioi package.json -tiedostot
COPY package*.json ./

# Asenna vain tuotantoriippuvuudet
RUN npm ci --omit=dev

# Kopioi buildatun Next.js-sovelluksen tulosteet
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
# (Lisää muita tiedostoja jos tarvii, esim. .env.production)

# Ympäristömuuttujat
ENV NODE_ENV=production

# Portti
EXPOSE 3000

# Ajovaiheen käynnistyskomento
CMD ["npm", "run", "start"]
