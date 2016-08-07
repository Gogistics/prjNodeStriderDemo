# my nodejs server
FROM    debian:stable

# File Author / Maintainer
MAINTAINER Alan Tai <gogistics@gogistics-tw.com>

# run commands
RUN  apt-get update && \
     DEBIAN_FRONTEND=noninteractive apt-get install -yq curl apt-utils git git-core build-essential && \
     curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
     apt-get install -yq nodejs && \
     apt-get update && \
     apt-get clean

# copy files
# COPY script/ /app/script/

# dir
WORKDIR /app

# entry command
CMD ./script/start
