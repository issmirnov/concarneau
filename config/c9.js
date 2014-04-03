var argv = require('yargs').argv;

process.env.FACEBOOK_SECRET = argv.FACEBOOK_SECRET;
process.env.TWITTER_SECRET = argv.TWITTER_SECRET;
process.env.GOOGLE_SECRET = argv.GOOGLE_SECRET;

process.env.FACEBOOK_CALLBACK = 'https://concarneau-c9-btouellette.c9.io/auth/facebook/callback';
process.env.TWITTER_CALLBACK = 'https://concarneau-c9-btouellette.c9.io/auth/twitter/callback';
process.env.GOOGLE_CALLBACK = 'https://concarneau-c9-btouellette.c9.io/auth/google/callback';

process.env.MONGOLAB_URI = 'mongodb://' + process.env.IP + '/concarneau_db';