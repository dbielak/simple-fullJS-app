FROM nginx:1.15.2-alpine

EXPOSE 80

RUN apk add --no-cache bash

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
