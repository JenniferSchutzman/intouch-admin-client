const config = {
  base:
    process.env.REACT_APP_ENV !== "production"
      ? "http://localhost:3090"
      : "https://intouch-api-prod.now.sh"
}

module.exports = config
