"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DataBase_instances, _DataBase_exportaConta;
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class DataBase {
    constructor() {
        _DataBase_instances.add(this);
        this.listaDeContas = require('../../db/listaDeContas.json');
    }
    buscarConta(id, senha) {
        const conta = this.listaDeContas.find((element) => {
            return ((element.id == id) && (element.senha == senha));
        });
        return __classPrivateFieldGet(this, _DataBase_instances, "m", _DataBase_exportaConta).call(this, conta);
    }
}
_DataBase_instances = new WeakSet(), _DataBase_exportaConta = function _DataBase_exportaConta(conta) {
    if (conta) {
        const resultado = {
            id: conta.id,
            tipoDeConta: conta.tipoDeConta,
            nomeCompleto: conta.nomeCompleto,
            dataDeNascimento: conta.dataDeNascimento,
            saldo: conta.saldo
        };
        return resultado;
    }
    else {
        return undefined;
    }
};
exports.default = DataBase;
