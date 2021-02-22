# FROM python:3.8-alpine

# RUN apk update
# RUN apk --no-cache --update-cache add gcc gfortran build-base wget freetype-dev libpng-dev openblas-dev
# RUN ln -s /usr/include/locale.h /usr/include/xlocale.h

# COPY requirements.txt /app/

# WORKDIR /app

# RUN mkdir -p out/

# RUN pip install --no-cache-dir -r requirements.txt

# COPY src/. /app/

FROM python:3.7
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install packages
RUN apt-get update -y && \
    apt-get install -y python-scipy\
    python-numpy python-pandas &&\
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt /app/
COPY src/. /app/
COPY scripts/. /app/

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "sh", "run-assembly.sh"]