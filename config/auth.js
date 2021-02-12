// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
        'clientID' 		: process.env.FACEBOOK_CLIENT_ID, // your App ID
		'clientSecret' 	: process.env.FACEBOOK_SECRET, // your App Secret
		'callbackURL' 	: process.env.FACEBOOK_CALLBACK || process.env.HOST + ':' + (process.env.PORT || 8080) + '/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: process.env.TWITTER_CONSUMER_KEY,
		'consumerSecret' 	: process.env.TWITTER_SECRET,
		'accessToken'       : process.env.TWITTER_ACCESS_TOKEN,
		'accessTokenSecret' : process.env.TWITTER_ACCESS_SECRET,
        'callbackURL' 		: process.env.TWITTER_CALLBACK || process.env.HOST + ':' + (process.env.PORT || 8080) + '/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: process.env.GOOGLE_CLIENT_ID,
		'clientSecret' 	: process.env.GOOGLE_SECRET,
		'refreshToken'  : process.env.GOOGLE_REFRESH_TOKEN,
		'callbackURL' 	: process.env.GOOGLE_CALLBACK || process.env.HOST +  ':' + (process.env.PORT || 8080) + '/auth/google/callback'
	}

};
