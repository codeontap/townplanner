FROM jekyll/builder:3.8

COPY src/ /srv/jekyll

VOLUME /srv/jekyll/pages