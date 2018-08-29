'use strict'

// const errcode = require('err-code')

const debug = require('debug')
const log = debug('jsipfs:ipns:publisher')
log.error = debug('jsipfs:ipns:publisher:error')

class IpnsPubsubRouter {
  constructor (pubsub) {
    this._pubsub = pubsub
  }

  /**
   *
   *
   * @param {Key} key
   * @param {Buffer} val
   * @param {function(Error)} callback
   * @returns {void}
   */
  put (key /* : Key */, val /* : Buffer */, callback /* : Callback<void> */) /* : void */ {
    log(`publish value for key ${key}`)

    // Publish

    console.log('put pubsub')
    callback(null, null)
  }

  _getLocal () {

  }

  /**
   *
   *
   * @param {Key} key
   * @param {function(Error, Buffer)} callback
   * @returns {void}
   */
  get (key /* : Key */, callback /* : Callback<Buffer> */) /* : void */ {
    log(`subscribe values for key ${key}`)

    // Subscribe

    // If subscribed, return _getLocal()
  }
}

exports = module.exports = IpnsPubsubRouter
