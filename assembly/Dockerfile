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