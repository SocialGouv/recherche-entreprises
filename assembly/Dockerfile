FROM python:3.8-alpine

COPY requirements.txt /app/

WORKDIR /app

RUN mkdir -p out/

RUN pip install --upgrade pip \
    &&  pip install --trusted-host pypi.python.org --requirement requirements.txt

COPY src/. /app/

ENTRYPOINT [ "python", "assemble_data.py" ]