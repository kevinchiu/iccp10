# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_iccp10_session',
  :secret      => '647f7db3894e909ef77bc7ab77cceb178f0b1f1c89e3e5debf8e3b77064ef08477cd0c697febde5e05596f08f0bb3c059fc35cf6e041df6d93d062ae023cca7a'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
