FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/W-i-z-z-k-i-d/NEZUKO-V2 /root/bot/
WORKDIR /root/bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
