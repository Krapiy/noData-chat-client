import * as types from './mutation-types'
import bip39 from 'bip39'
import bitcoin from 'bitcoinjs-lib'
import ethUtil from 'ethereumjs-util'

export default {
  namespaced: true,

  state: {
    login: null,
    password: null,
    confirmPassword: null,
    mnemonic: null,
    seed: null,
    rootKey: null,
    extendedKey: null,
    privateKey: null,
    address: null
  },

  getters: {
    getLogin: state => { return state.login },
    getPassword: state => { return state.password },
    getConfirmPassword: state => { return state.confirmPassword }
  },

  actions: {
    generateMnemonic ({ commit }) {
      console.log(bitcoin)
      let mnemonic = bip39.generateMnemonic()
      commit(types.SET_MNEMONIC, mnemonic)
      return mnemonic
    },

    generateSeed ({ commit, state }, menmonic, password = '') {
      let seed = bip39.mnemonicToSeed(menmonic || state.mnemonic, password)
      commit(types.SET_SEED, seed)
      return seed
    },

    generateRootKey ({ commit, state }, seed) {
      let rootKey = bitcoin.bip32.fromSeed(seed || state.seed, bitcoin.networks.bitcoin)
      commit(types.SET_ROOT_KEY, rootKey)
      return rootKey
    },

    generateExtendedKey ({ commit, state }, rootKey, path = 'm/0') {
      const pathBits = path.split('/')
      let extendedKey = rootKey || state.rootKey

      for (let pathBit of pathBits) {
        let index = parseInt(pathBit)

        if (isNaN(index)) {
          continue
        }
        const hardened = pathBit[ pathBit.length - 1 ] === "'"
        const invalidDerivationPath = hardened && extendedKey.isNeutered()

        if (invalidDerivationPath) {
          extendedKey = null
        } else if (hardened) {
          extendedKey = extendedKey.deriveHardened(index)
        } else {
          extendedKey = extendedKey.derive(index)
        }
        commit(types.SET_EXTENDED_KEY, extendedKey)
        return extendedKey
      }
    },

    generatePrivateKey ({ commit, state }, extendedKey) {
      state.extendedKey = state.extendedKey.derive(0)
      let privateKey = state.extendedKey.privateKey.toString('hex')
      commit(types.SET_PRIVATE_KEY, privateKey)
      return privateKey
    },

    generateAddress ({ commit, state }, privateKey) {
      privateKey = privateKey ? Buffer.from(privateKey, 'hex') : Buffer.from(state.privateKey, 'hex')
      let addressBuffer = ethUtil.privateToAddress(privateKey)
      let hexAddress = addressBuffer.toString('hex')
      let checksumAddress = ethUtil.toChecksumAddress(hexAddress)
      let address = ethUtil.addHexPrefix(checksumAddress)
      commit(types.SET_ADDRESS, address)
      return address
    }
  },

  mutations: {
    [types.SET_LOGIN] (state, login) {
      state.login = login
    },
    [types.SET_PASSWORD] (state, password) {
      state.password = password
    },
    [types.SET_CONFIRM_PASSWORD] (state, password) {
      state.confirmPassword = password
    },
    [types.SET_MNEMONIC] (state, mnemonic) {
      state.mnemonic = mnemonic
    },
    [types.SET_SEED] (state, seed) {
      state.seed = seed
    },
    [types.SET_ROOT_KEY] (state, rootKey) {
      state.rootKey = rootKey
    },
    [types.SET_EXTENDED_KEY] (state, extendedKey) {
      state.extendedKey = extendedKey
    },
    [types.SET_PRIVATE_KEY] (state, privateKey) {
      state.privateKey = privateKey
    },
    [types.SET_ADDRESS] (state, address) {
      state.address = address
    }
  }
}
