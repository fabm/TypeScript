//// [promiseType.ts]
declare var p: Promise<boolean>;

const a = p.then();
const b = p.then(b => 1);
const c = p.then(b => 1, e => 'error');
const d = p.then(b => 1, e => { });
const e = p.then(b => 1, e => { throw Error(); });
const f = p.then(b => 1, e => Promise.reject(Error()));
const g = p.catch(e => 'error');
const h = p.catch(e => { });
const i = p.catch(e => { throw Error(); });
const j = p.catch(e => Promise.reject(Error()));

async function A() {
    const a = await p;
    return a;
}

async function B() {
    const a = await p;
    return 1;
}

// NOTE: This reports a "No best comment type exists among return expressions." error, and is
//       ignored to get the types result for the test.
// async function C() {
//     try {
//         const a = await p;
//         return 1;
//     }
//     catch (e) {
//         return 'error';
//     }
// }

async function D() {
    try {
        const a = await p;
        return 1;
    }
    catch (e) {
    }
}

async function E() {
    try {
        const a = await p;
        return 1;
    }
    catch (e) {
        throw Error();
    }
}

async function F() {
    try {
        const a = await p;
        return 1;
    }
    catch (e) {
        return Promise.reject(Error());
    }
}

async function G() {
    try {
        const a = await p;
        return a;
    }
    catch (e) {
        return;
    }
}

async function H() {
    try {
        const a = await p;
        return a;
    }
    catch (e) {
        throw Error();
    }
}

async function I() {
    try {
        const a = await p;
        return a;
    }
    catch (e) {
        return Promise.reject(Error());
    }
}

//// [promiseType.js]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const a = p.then();
const b = p.then(b => 1);
const c = p.then(b => 1, e => 'error');
const d = p.then(b => 1, e => { });
const e = p.then(b => 1, e => { throw Error(); });
const f = p.then(b => 1, e => Promise.reject(Error()));
const g = p.catch(e => 'error');
const h = p.catch(e => { });
const i = p.catch(e => { throw Error(); });
const j = p.catch(e => Promise.reject(Error()));
function A() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield p;
        return a;
    });
}
function B() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = yield p;
        return 1;
    });
}
// NOTE: This reports a "No best comment type exists among return expressions." error, and is
//       ignored to get the types result for the test.
// async function C() {
//     try {
//         const a = await p;
//         return 1;
//     }
//     catch (e) {
//         return 'error';
//     }
// }
function D() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const a = yield p;
            return 1;
        }
        catch (e) {
        }
    });
}
function E() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const a = yield p;
            return 1;
        }
        catch (e) {
            throw Error();
        }
    });
}
function F() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const a = yield p;
            return 1;
        }
        catch (e) {
            return Promise.reject(Error());
        }
    });
}
function G() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const a = yield p;
            return a;
        }
        catch (e) {
            return;
        }
    });
}
function H() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const a = yield p;
            return a;
        }
        catch (e) {
            throw Error();
        }
    });
}
function I() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const a = yield p;
            return a;
        }
        catch (e) {
            return Promise.reject(Error());
        }
    });
}
