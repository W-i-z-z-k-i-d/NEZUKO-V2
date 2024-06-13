FROM quay.io/loki-xer/jarvis-md:latest
RUN git clone https://github.com/W-i-z-z-k-i-d/NEZUKO-V2 /root/W-i-z-z-k-i-d/
WORKDIR /root/W-i-z-z-k-i-d/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
