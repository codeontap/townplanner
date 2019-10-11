FROM jekyll/builder:3.8

COPY src/Gemfile /srv/jekyll/Gemfile
COPY src/Gemfile.lock /srv/jekyll/Gemfile.lock
RUN bundle install

COPY src/ /srv/jekyll
