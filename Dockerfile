FROM ruby:3.0.2

ENV BUNDLE_VERSION 2.3.21
ENV APP_PATH /app

COPY ./dev-docker-entrypoint.sh /usr/local/bin/dev-entrypoint.sh
RUN chmod +x /usr/local/bin/dev-entrypoint.sh
RUN apt-get update -qq \
&& apt-get install -y curl build-essential libpq-dev \
 nodejs postgresql-client &&\
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn
ADD . /app
WORKDIR $APP_PATH
RUN gem install bundler --version "$BUNDLE_VERSION"
RUN bundle install
# RUN yarn install --check-files
EXPOSE 3000
# CMD ["bash"]
ENTRYPOINT [ "bundle", "exec" ]