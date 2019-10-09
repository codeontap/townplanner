FROM jekyll/builder:4.0

COPY src/Gemfile /srv/jekyll/Gemfile
COPY src/Gemfile.lock /srv/jekyll/Gemfile.lock
RUN bundle install

COPY src/ /srv/jekyll
