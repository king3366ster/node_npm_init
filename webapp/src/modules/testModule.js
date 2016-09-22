function testTimeout (timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timeout+'asd')
    }, timeout)
  })
}

export async function timeoutFn () {
  let result = await testTimeout(2)
  console.log(result)
}
