const env = process.env;

// looking for a node environment thats running or the develompent area
export const nodeEnv = env.NODE_ENV || 'development'

// logs messages
export const logMessage = function(message){
  console.info(message)
}

// assign port if it dosent exist create 1234
// look for host if it dosent exist create 0.0.0.0
// return the path
export default {
  port: env.PORT || 1234,
  host: env.HOST || '0.0.0.0',
  get serverURL(){
    return `http://${this.host}:${this.port}`
  }
}
