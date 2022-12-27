FROM alpine:3.14

ARG PHP_VERSION='8'

ENV LANG='en_US.UTF-8' \
    LANGUAGE='en_US.UTF-8' \
     PHP_VERSION="${PHP_VERSION}"
# RUN apk add --no-cache mysql-client
# RUN apk add --no-cache
RUN apk update --no-cache && \
    apk add --no-cache --virtual=run-deps \
      bash \
      php${PHP_VERSION}-fpm \
      php${PHP_VERSION}-cli \
      php${PHP_VERSION}-bcmath \
      php${PHP_VERSION}-gd \
      php${PHP_VERSION}-gmp \
      php${PHP_VERSION}-intl \
      php${PHP_VERSION}-mbstring \
      php${PHP_VERSION}-mysqli \
      php${PHP_VERSION}-odbc \
      php${PHP_VERSION}-opcache \
      php${PHP_VERSION}-pdo \
      php${PHP_VERSION}-pgsql \
      php${PHP_VERSION}-soap \
      php${PHP_VERSION}-xml \
      php${PHP_VERSION}-zip \
      php${PHP_VERSION}-pecl-apcu \
      php${PHP_VERSION}-pecl-imagick \
      php${PHP_VERSION}-pecl-mcrypt \
      php${PHP_VERSION}-pecl-memcache \
      php${PHP_VERSION}-pecl-redis \
      php${PHP_VERSION}-bz2 \
      php${PHP_VERSION}-ctype \
      php${PHP_VERSION}-curl \
      php${PHP_VERSION}-dom \
      php${PHP_VERSION}-fileinfo \
      php${PHP_VERSION}-ftp \
      php${PHP_VERSION}-gettext \
      php${PHP_VERSION}-iconv \
      php${PHP_VERSION}-json \
      php${PHP_VERSION}-openssl \
      php${PHP_VERSION}-pcntl \
      php${PHP_VERSION}-pdo_dblib \
      php${PHP_VERSION}-pdo_odbc \
      php${PHP_VERSION}-pdo_mysql \
      php${PHP_VERSION}-pdo_pgsql \
      php${PHP_VERSION}-pdo_sqlite \
      php${PHP_VERSION}-phar \
      php${PHP_VERSION}-posix \
      php${PHP_VERSION}-simplexml \
      php${PHP_VERSION}-sqlite3 \
      php${PHP_VERSION}-tokenizer \
      php${PHP_VERSION}-xmlreader \
      php${PHP_VERSION}-xmlwriter \
      nginx

ENTRYPOINT ["tail","-f","/dev/null"]