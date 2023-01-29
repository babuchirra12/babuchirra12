import logger from 'loglevel';

const getLogger = (module) =>{
    const log = logger.getLogger(module)
    process.env.NODE_ENV === 'production' ?
    log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL_PROD) :
    log.setDefaultLevel(process.env.REACT_APP_LOG_LEVEL_DEV)
}