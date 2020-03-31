const assert = require('assert').strict;

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

// 에러 메세지 커스텀(TypeError)
// assert.doesNotThrow(
//     () => {
//         throw new TypeError('Wrong value');
//     },
//     TypeError
// )

// 실페 메세지 커스텀
// assert.fail();
// assert.fail('boom');
// assert.fail(new TypeError('need array'));

// 엄격하지 않은 비교
// assert.notDeepStrictEqual({a: 1}, {a: '1'});

// 엄격하지 않은 비교
// assert.notDeepEqual(1, 2);
// assert.notDeepEqual(1, 1);
// assert.notDeepEqual(1, '1');

// 프로미스 리젝
// (async () => {
//     await assert.rejects(
//         async () => {
//             throw new TypeError('Wrong value');
//         },
//         {
//             name: 'TypeError',
//             message: 'Wrong value'
//         }
//     );
// })();
// assert.rejects(
//     Promise.reject(new Error('Wrong value')),
//     Error
// ).then(() => {
// });

// 비교문 비교
// assert.ok(true);
// assert.ok(1);
// assert.ok();
// assert.ok(false, 'it\'s false');
// assert.ok(typeof 123 === 'string');
// assert.ok(typeof 123 === 'string');
// assert.ok(false);
// assert.ok(0);
// assert(0);

// 콜백에서 오류 인수를 테스트 할 때 유용합니다.
// assert.ifError(null);
// assert.ifError(0);
// assert.ifError('error');
// assert.ifError(new Error());

// 커스텀 에러
// let error;
// (function errorFrame() {
//     error = new Error('test error');
// })();
// (function ifErrorFrame() {
//     assert.ifError(error);
// })();

// const { message } = new assert.AssertionError({
//     actual: 1,
//     expected: 2,
//     operator: 'strictEqual'
// });

// try {
//     assert.strictEqual(1, 2);
// } catch(error) {
//     assert(error instanceof assert.AssertionError);
//     assert.strictEqual(error.message, message);
//     assert.strictEqual(error.name, 'AssertionError');
//     assert.strictEqual(error.actual, 1);
//     assert.strictEqual(error.expected, 2);
//     assert.strictEqual(error.code, 'ERR_ASSETRTION');
//     assert.strictEqual(error.operator, 'strictEqual');
//     assert.strictEqual(error.generatedMessage, true);
// }

// 함수 fn이 오류를 발생시킬 것으로 예상합니다.
// function throwingFirst() {
//     throw new Error('First');
// }
// function throwingSecond() {
//     throw new Error('Second');
// }
// function notThrowing() {}
// assert.throws(throwingFirst, 'Second');
// assert.throws(throwingSecond, 'Second');